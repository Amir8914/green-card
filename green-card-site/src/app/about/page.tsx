import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Green Card Lottery Expert - Professional DV Lottery Consulting',
  description: 'Learn about our team of professional immigration consultants specializing in Diversity Visa lottery applications with 10+ years of experience.',
  keywords: ['green card lottery experts', 'DV lottery consultants', 'immigration professionals', 'diversity visa specialists'],
}

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">About Green Card Lottery Expert</h1>
      
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg mx-auto">
          <p className="text-xl text-gray-600 text-center mb-12">
            Professional immigration consultants specializing in Diversity Visa lottery applications with over a decade of experience.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To help individuals worldwide achieve their American dream through expert guidance on the Green Card Lottery process. 
                We provide professional assistance that significantly increases your chances of success.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Expertise</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• 10+ years of DV lottery experience</li>
                <li>• Licensed immigration consultants</li>
                <li>• 99% application accuracy rate</li>
                <li>• Helped clients from 100+ countries</li>
                <li>• Stay updated with latest requirements</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-lg mt-12">
            <h2 className="text-2xl font-bold mb-4">Why Professional Help Matters</h2>
            <p className="text-gray-700">
              The Green Card Lottery has strict requirements and common mistakes can lead to automatic disqualification. 
              Our professional review ensures your application meets all criteria and maximizes your chances of selection.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}