export default function HomeHowItWorks() {
  return (
    <section className="bg-gray-50 py-20 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How We Work
          </h2>
          <p className="text-xl text-gray-600">
            From consultation to lights on in 7 days
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Step 1 */}
          <div className="text-center md:text-left flex flex-col h-full">
            <div className="w-20 h-20 bg-blue-500 text-white rounded-2xl flex items-center justify-center mx-auto md:mx-0 mb-6 text-2xl font-bold">
              1
            </div>
            <h3 className="text-2xl font-bold mb-4 text-pink-500">
              Free Consultation
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed flex-grow">
              Site survey & custom design. WhatsApp or visit our Ogba office.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center md:text-left flex flex-col h-full">
            <div className="w-20 h-20 bg-green-500 text-white rounded-2xl flex items-center justify-center mx-auto md:mx-0 mb-6 text-2xl font-bold">
              2
            </div>
            <h3 className="text-2xl font-bold mb-4 text-pink-500">
              Installation
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed flex-grow">
              Professional team installs in 2–3 days. Minimal disruption.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center md:text-left flex flex-col h-full">
            <div className="w-20 h-20 bg-purple-500 text-white rounded-2xl flex items-center justify-center mx-auto md:mx-0 mb-6 text-2xl font-bold">
              3
            </div>
            <h3 className="text-2xl font-bold mb-4 text-pink-500">Power On</h3>
            <p className="text-lg text-gray-600 leading-relaxed flex-grow">
              Full training & 24/7 support. Enjoy reliable power forever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
