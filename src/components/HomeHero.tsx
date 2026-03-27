"use client";

import { useScrollReveal } from "@/src/hooks/useScrollReveal";
import { useTypewriter } from "@/src/hooks/useTypewriter";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function HomeHero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  useScrollReveal();
  const fullHeadlineText = `Go solar with AZMIL`;
  useTypewriter(headlineRef, fullHeadlineText, 60);

  return (
    <section className="relative bg-gray-900 text-white overflow-hidden py-20 px-4 md:px-8 lg:px-16">
      <div className="absolute inset-0 bg-black/20" />
      <Image
        src="/solar-panel-7.jpg"
        alt="AZMIL Solar Installation"
        fill
        className="object-cover -z-10"
      />
      <div className="relative max-w-7xl mx-auto text-center">
        <h1
          ref={headlineRef}
          className="typewriter-text text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        ></h1>
        <p className="subheadline text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-0">
          Escape NEPA blackouts forever. Reliable solar power for your home and
          business. Save thousands on fuel generators. warranty guaranteed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
          <Link
            href="https://wa.me/2348134936101?text=Hello%20AZMIL%2C%20I%27m%20interested%20in%20a%20solar%20quote%20for%20my%20home%2Fbusiness."
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-2"
          >
            <span>
              <FaWhatsapp className="text-2xl" />
            </span>
            Get WhatsApp Quote
          </Link>
          <Link
            href="/energy_calculator"
            className="border-2 border-white text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            Try Calculator
          </Link>
        </div>
        {/* Trust Signals */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center">
          <div>
            <div
              data-scroll-reveal
              data-count-target="2016"
              data-count-text="2016"
              className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2 animate-on-scroll"
            >
              2016
            </div>
            <p className="text-sm opacity-90">Begin Operation</p>
          </div>
          <div>
            <div
              data-scroll-reveal
              data-count-target="150"
              data-count-text="150k"
              className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2 animate-on-scroll"
            >
              150k
            </div>
            <p className="text-sm opacity-90">Products Sold</p>
          </div>
          <div>
            <div
              className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2 animate-on-scroll"
              data-scroll-reveal
              data-count-target="98"
              data-count-text="98%"
            >
              98
            </div>
            <p className="text-sm opacity-90">Customer Satisfaction</p>
          </div>
          <div>
            <div
              className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2 animate-on-scroll"
              data-scroll-reveal
            >
              24/7
            </div>
            <p className="text-sm opacity-90">Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
