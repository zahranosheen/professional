const HomePage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Welcome to Our Simple App</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          This is a clean and minimal Next.js 15+ application built with TypeScript and styled with Tailwind CSS.
        </p>
        <div className="space-y-4">
          <p className="text-gray-700">Explore our pages to learn more about what we do and how to get in touch.</p>
        </div>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-8">
        <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Modern Stack</h3>
          <p className="text-gray-600">Built with Next.js 15+, TypeScript, and Tailwind CSS for optimal performance.</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Clean Design</h3>
          <p className="text-gray-600">Minimal and responsive design that works beautifully on all devices.</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to Deploy</h3>
          <p className="text-gray-600">Configured and ready to deploy without any additional setup required.</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage