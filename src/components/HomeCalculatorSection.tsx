import Image from "next/image";
import Link from "next/link";

export default function HomeCalculatorSection() {
  return (
    <section className="py-20 px-4 md:px-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <Image
          src="/solar-inverter-2.jpg"
          alt="Solar Calculator"
          width={500}
          height={300}
          className="w-full max-w-md mx-auto rounded-3xl shadow-2xl mb-12 object-cover"
        />
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Size Your Perfect System
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Enter your appliances in seconds. Get exact panels, battery & inverter
          specs with price.
        </p>
        <Link
          href="/energy_calculator"
          className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-12 py-6 rounded-3xl text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300"
        >
          Start Calculator Now
        </Link>
      </div>
    </section>
  );
}
