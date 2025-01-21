export default function ContactForm() {
    return (
      <div className="max-w-4xl mx-auto px-4 py-36">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">How can we help you?</h1>
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600">
            We would love to start a journey with you to secure your business.
            Fill out the form below and we will be in touch soon, or email us at{" "}
            <a
              href="mailto:info@break2secure.com"
              className="text-blue-600 hover:text-blue-800"
            >
              info@break2secure.com
            </a>
          </p>
        </div>
  
        <form className="space-y-6">
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          <div>
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          <div>
            <textarea
              name="message"
              placeholder="How can I help you?"
              rows={4}
              className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          <div className="text-center">
            <button
              type="submit"
              className="bg-black text-white px-8 py-3 rounded font-medium hover:bg-gray-800 transition-colors"
            >
              Get in touch
            </button>
          </div>
        </form>
      </div>
    );
  }