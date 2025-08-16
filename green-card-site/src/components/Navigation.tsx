import Link from 'next/link'

export default function Navigation() {
  return (
    <div className="space-x-4">
      <Link href="/" className="hover:text-blue-200">Home</Link>
      <Link href="/about" className="hover:text-blue-200">About</Link>
      <Link href="/services" className="hover:text-blue-200">Services</Link>
      <Link href="/contact" className="hover:text-blue-200">Contact</Link>
    </div>
  )
}