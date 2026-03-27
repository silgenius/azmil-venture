"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function HomeCTASection() {
  return (
    <section
      className="text-white py-20 px-4 md:px-16"
      style={{
        backgroundImage: "url('/solar-panel-7.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Go Solar?
        </h2>
        <p className="text-xl mb-12 opacity-90">
          Join 5000+ Nigerian homes & businesses enjoying reliable power. Your
          freedom starts today.
        </p>
        <Link
          href="https://wa.me/2348134936101?text=Hi%20AZMIL%2C%20please%20send%20me%20solar%20options%20for%20my%20[home%2Foffice]%20"
          className="bg-white text-green-600 px-12 py-6 rounded-3xl text-2xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
        >
          <span>
            <FaWhatsapp className="text-xl" />
          </span>
          Get In Touch (2 mins)
        </Link>
      </div>
    </section>
  );
}
