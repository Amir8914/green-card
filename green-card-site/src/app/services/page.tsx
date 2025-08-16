import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DV Lottery Services - Professional Green Card Application Help',
  description: 'Comprehensive Diversity Visa lottery services including application review, photo requirements, document preparation, and mistake prevention.',
  keywords: ['DV lottery services', 'green card application help', 'photo requirements assistance', 'diversity visa consulting'],
}

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
      <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
        Comprehensive DV lottery assistance designed to maximize your chances of success
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-600">
          <h3 className="text-xl font-bold mb-4">Application Review</h3>
          <p className="text-gray-600 mb-4">
            Complete review of your DV lottery application to ensure accuracy and compliance with all requirements.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Form completion verification</li>
            <li>• Eligibility confirmation</li>
            <li>• Error detection and correction</li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-600">
          <h3 className="text-xl font-bold mb-4">Photo Requirements</h3>
          <p className="text-gray-600 mb-4">
            Expert guidance on meeting strict photo specifications that cause many rejections.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Photo specification review</li>
            <li>• Quality assessment</li>
            <li>• Compliance verification</li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-purple-600">
          <h3 className="text-xl font-bold mb-4">Document Preparation</h3>
          <p className="text-gray-600 mb-4">
            Assistance with organizing and preparing all required documentation.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Document checklist</li>
            <li>• Organization guidance</li>
            <li>• Translation requirements</li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-orange-600">
          <h3 className="text-xl font-bold mb-4">Mistake Prevention</h3>
          <p className="text-gray-600 mb-4">
            Avoid common errors that lead to automatic disqualification from the lottery.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Common pitfall identification</li>
            <li>• Best practice guidance</li>
            <li>• Quality assurance checks</li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-red-600">
          <h3 className="text-xl font-bold mb-4">Timeline Management</h3>
          <p className="text-gray-600 mb-4">
            Never miss important deadlines with our timeline and deadline management.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Deadline tracking</li>
            <li>• Reminder system</li>
            <li>• Process optimization</li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-indigo-600">
          <h3 className="text-xl font-bold mb-4">Post-Submission Support</h3>
          <p className="text-gray-600 mb-4">
            Continued guidance after submission including result interpretation and next steps.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Result notification help</li>
            <li>• Next steps guidance</li>
            <li>• Ongoing consultation</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-6">Don&apos;t risk rejection - get professional help with your DV lottery application today.</p>
        <a href="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Get Expert Help Now
        </a>
      </div>
    </div>
  )
}