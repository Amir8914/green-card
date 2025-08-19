# Green Card Lottery Consulting Website

A Next.js-based lead generation website for Green Card Lottery (DV Lottery) consulting services, designed to rank highly for immigration-related keywords and capture qualified leads.

## 🎯 Project Overview

**Business Focus**: Expert DV lottery application assistance and immigration consulting  
**Primary Goal**: High-converting, SEO-optimized lead capture system  
**Target Keywords**: green card lottery, DV lottery application, diversity visa lottery, USA immigration lottery

## 🚀 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Database**: Supabase (Postgres) with RLS
- **Email**: Resend API
- **Hosting**: Vercel
- **Anti-spam**: Cloudflare Turnstile + Upstash Redis
- **Analytics**: Google Analytics 4 + Vercel Analytics
- **Error Tracking**: Sentry

## 📋 Features

- ✅ Lead capture form with immigration-specific fields
- ✅ Server-side validation with Zod
- ✅ Automated email confirmations
- ✅ Rate limiting and spam protection
- ✅ SEO optimization with structured data
- ✅ Responsive design
- 🚧 Content management system
- 🚧 Advanced analytics integration

## 🛠️ Development

### Prerequisites

- Node.js 18+
- pnpm (preferred) or npm
- Supabase account
- Resend account for email

### Installation

```bash
# Clone the repository
git clone https://github.com/Amir8914/green-card.git
cd green-card/green-card-site

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local
# Edit .env.local with your API keys

# Run development server
pnpm dev
```

### Environment Variables

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Email
RESEND_API_KEY=your_resend_key

# Security
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_turnstile_site_key
TURNSTILE_SECRET_KEY=your_turnstile_secret

# Rate Limiting
UPSTASH_REDIS_REST_URL=your_redis_url
UPSTASH_REDIS_REST_TOKEN=your_redis_token
```

### Available Scripts

```bash
pnpm dev          # Development server
pnpm build        # Production build
pnpm start        # Production server
pnpm lint         # ESLint check
pnpm typecheck    # TypeScript check
```

## 📊 SEO Strategy

- **Target Pages**: 9 core pages covering DV lottery process
- **Structured Data**: Organization, WebSite, BreadcrumbList, FAQ schemas
- **Performance**: LCP < 2.5s, INP < 200ms, CLS < 0.1
- **Content**: Educational authority on green card lottery process

## 📝 Content Structure

- **Homepage**: Main value proposition and lead capture
- **About**: Company expertise and credentials
- **Services**: DV lottery assistance offerings
- **DV Lottery Guide**: Educational content for SEO
- **Success Stories**: Client testimonials and case studies
- **FAQ**: Common immigration questions
- **Contact**: Multiple contact methods
- **Legal**: Privacy Policy, Terms of Service

## 🔒 Security & Privacy

- Rate limiting on form submissions
- GDPR-compliant data collection
- Row Level Security (RLS) in database
- Input validation and sanitization
- CAPTCHA integration

## 📈 Analytics & Monitoring

- Google Analytics 4 for user behavior
- Vercel Analytics for performance
- Sentry for error tracking
- Search Console for SEO monitoring

## 🚀 Deployment

The site is configured for deployment on Vercel with automatic builds from the main branch.

```bash
pnpm build  # Ensure production build works
# Deploy via Vercel Dashboard or CLI
```

## 📞 Support

For technical issues or feature requests, please open an issue in this repository.

---

Built with ❤️ for immigration consulting excellence