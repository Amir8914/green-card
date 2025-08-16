import { Redis } from '@upstash/redis'
import { Ratelimit } from '@upstash/ratelimit'

// Create Redis instance with fallback
let redis: Redis | null = null
let ratelimit: Ratelimit | null = null

if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN && 
    process.env.UPSTASH_REDIS_REST_URL !== 'your_upstash_redis_url') {
  redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  })

  // Create rate limiter
  ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(3, '10 m'), // 3 requests per 10 minutes
    analytics: true,
  })
}

export async function checkRateLimit(identifier: string): Promise<{ success: boolean; limit: number; remaining: number; reset: Date }> {
  if (!ratelimit) {
    // If no rate limiting configured, allow all requests
    return {
      success: true,
      limit: 1000,
      remaining: 999,
      reset: new Date(Date.now() + 600000) // 10 minutes from now
    }
  }

  const result = await ratelimit.limit(identifier)
  
  return {
    success: result.success,
    limit: result.limit,
    remaining: result.remaining,
    reset: new Date(result.reset)
  }
}