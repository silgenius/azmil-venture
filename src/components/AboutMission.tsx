"use client";

export default function AboutMission() {
  return (
    <section className="relative w-full py-12 px-6 md:px-16 overflow-hidden bg-white">
      {/* Subtle grid background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f4f4f5_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f5_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-[2fr_1fr] gap-24 items-start">
        {/* LEFT CONTENT */}
        <div className="max-w-3xl ">
          <h2 className="text-4xl md:text-5xl font-[500] text-zinc-900 tracking-tight leading-tight">
            Our mission
          </h2>

          <p className="mt-6 text-lg text-zinc-500 leading-8">
            To enable people to reach their full potentials by ensuring the
            stability of light in their lives. Through innivative solar inverter
            solutions, we strive to eliminate the instability associated with
            traditional energy sourcs and empower individuals, businesses, and
            entire communities to thrive in a world bathed in the brilliance of
            solar power
          </p>

          <p className="mt-6 text-lg text-zinc-500 leading-8">
            At our core, sustainability drives everything we do. We are not just
            in the solar business — we are in the business of transformation,
            helping to build a cleaner, greener, and brighter future for all.
          </p>
        </div>

        {/* STATS */}
        <div className="flex flex-col justify-start space-y-14">
          <div>
            <p className="text-5xl md:text-6xl font-[500] text-zinc-900 tracking-tight leading-none">
              10+
            </p>
            <p className="mt-3 text-sm text-zinc-500 font-semibold leading-8">
              Years of Industry Experience
            </p>
          </div>

          <div>
            <p className="text-5xl md:text-6xl font-[500] text-zinc-900 tracking-tight leading-none">
              98%
            </p>
            <p className="mt-3 text-sm text-zinc-500 font-semibold leading-8">
              Customer Satisfaction Rate
            </p>
          </div>

          <div>
            <p className="text-5xl md:text-6xl font-[500] text-zinc-900 tracking-tight leading-none">
              10,000+
            </p>
            <p className="mt-3 text-sm text-zinc-500 font-semibold leading-8">
              Product Sold
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
