import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Green Card Lottery Expert - Get Professional DV Help',
  description: 'Contact our professional immigration consultants for expert help with your Green Card Lottery application. Get personalized guidance within 24 hours.',
  keywords: ['contact DV lottery expert', 'green card consultation', 'immigration help contact', 'diversity visa assistance'],
}

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
        Get expert help with your Green Card Lottery application. Fill out the form below and we&apos;ll get back to you within 24 hours.
      </p>
      
      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <ContactForm />
        </div>
        
        <div className="mt-12 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">What Happens Next?</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-semibold mb-2">You Submit</h3>
              <p className="text-sm text-gray-600">Fill out our consultation form with your details</p>
            </div>
            <div>
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-semibold mb-2">We Review</h3>
              <p className="text-sm text-gray-600">Our experts review your information within 24 hours</p>
            </div>
            <div>
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-semibold mb-2">We Respond</h3>
              <p className="text-sm text-gray-600">Receive personalized guidance for your application</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}