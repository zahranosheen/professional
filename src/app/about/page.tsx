const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
        <p className="text-xl text-gray-600">Learn more about our mission and what drives us forward.</p>
      </div>

      <div className="prose prose-lg mx-auto">
        <div className="bg-white rounded-lg shadow-sm border p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-700 mb-6">
            We are passionate about creating simple, elegant solutions that make a difference. Our team believes in the
            power of clean code, thoughtful design, and user-centered experiences.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            To build applications that are not only functional but also beautiful and intuitive. We strive to create
            digital experiences that users love and developers enjoy working with.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Simplicity in design and functionality</li>
            <li>Quality over quantity in everything we build</li>
            <li>Continuous learning and improvement</li>
            <li>Open communication and collaboration</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutPage