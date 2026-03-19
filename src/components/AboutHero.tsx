"use client";

export default function AboutHero() {
  return (
    <section className="w-full py-7 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-5xl md:text-7xl font-semibold text-zinc-900 leading-[1.05] tracking-tight max-w-2xl">
            Powering a Brighter Tomorrow
          </h1>

          <p className="mt-8 text-lg text-zinc-500 leading-relaxed max-w-xl">
            At AZMIL, our vision is to illuminate the world and make it a better
            place — one solar solution at a time. We believe access to reliable
            and sustainable energy is not just a convenience, but a fundamental
            human right. Our journey began with a commitment to harness the
            power of the sun, delivering clean, renewable energy solutions to
            homes, businesses, and communities. Through innovation and
            dedication, we aim to create a future where energy is stable,
            affordable, and environmentally friendly.
          </p>

          <p className="mt-8 text-lg text-zinc-500 leading-relaxed max-w-xl">
            We understand that light is more than illumination—it represents
            hope, growth, and opportunity. That’s why we are passionate about
            providing dependable solar and power solutions that empower people
            to thrive without the limitations of unreliable traditional energy
            sources.
          </p>
        </div>

        <div className="relative grid grid-cols-2 gap-6">
          {/* Left column */}
          <div className="space-y-6">
            <img
              src="/solar-inverter-2.jpg"
              alt="team meeting"
              className="rounded-2xl object-cover w-full h-64"
            />
            <img
              src="/solar-panel-6.jpg"
              alt="workspace"
              className="rounded-2xl object-cover w-full h-72"
            />
          </div>

          {/* Right column */}
          <div className="space-y-6 mt-12">
            <img
              src="/solar-inverter-3.jpg"
              alt="person working"
              className="rounded-2xl object-cover w-full h-72"
            />
            <img
              src="/solar-battery-1.jpg"
              alt="team discussion"
              className="rounded-2xl object-cover w-full h-64"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
