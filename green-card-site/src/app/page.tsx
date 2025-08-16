import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Maximize Your Green Card Lottery Success
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Expert guidance to significantly increase your chances of winning the DV lottery
          </p>
          <div className="bg-white text-blue-800 p-8 rounded-lg shadow-lg max-w-md mx-auto">
            <h3 className="text-2xl font-bold mb-4">Get Expert Help Today</h3>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose Our Expert Service?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-xl font-semibold mb-2">Years of Experience</div>
              <p>Decade of expertise in DV lottery applications</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl font-bold text-green-600 mb-2">99%</div>
              <div className="text-xl font-semibold mb-2">Application Accuracy</div>
              <p>Virtually eliminate rejection due to errors</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl font-bold text-purple-600 mb-2">5000+</div>
              <div className="text-xl font-semibold mb-2">Clients Helped</div>
              <p>Successfully assisted thousands worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold mb-3">Complete Application Review</h3>
              <p>Expert review of your DV lottery application to ensure accuracy and compliance with all requirements.</p>
            </div>
            <div className="border-l-4 border-green-600 pl-6">
              <h3 className="text-xl font-bold mb-3">Photo Requirements Assistance</h3>
              <p>Guidance on meeting strict photo specifications that cause many application rejections.</p>
            </div>
            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-xl font-bold mb-3">Document Preparation</h3>
              <p>Help organizing and preparing all required documentation for your application.</p>
            </div>
            <div className="border-l-4 border-orange-600 pl-6">
              <h3 className="text-xl font-bold mb-3">Common Mistake Prevention</h3>
              <p>Avoid the most common errors that lead to disqualification from the lottery.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}