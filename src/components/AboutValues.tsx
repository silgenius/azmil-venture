"use client";

export default function AboutValues() {
  const values = [
    {
      title: "Reliability",
      desc: "We ensure consistent and dependable energy solutions that our customers can trust.",
    },
    {
      title: "Quality Excellence",
      desc: "We deliver only high-quality products and services that meet international standards.",
    },
    {
      title: "Integrity",
      desc: "We operate with honesty, transparency, and accountability in all our dealings.",
    },
    {
      title: "Innovation",
      desc: "We continuously embrace new technologies to provide efficient and modern solar energy systems.",
    },
    {
      title: "Sustainability",
      desc: "We are committed to promoting clean and renewable energy solutions that protect the environment for future generations.",
    },
    {
      title: "Community Impact",
      desc: "We are dedicated to empowering communities through access to stable and affordable energy.",
    },
  ];

  return (
    <section className="w-full py-16 px-6 md:px-16 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 leading-tight">
            Our values
          </h2>
          <p className="mt-4 text-lg text-zinc-500 leading-relaxed">
            These principles guide everything we do — from how we build systems
            to how we serve our customers and support our team.
          </p>
        </div>

        {/* VALUES GRID */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {values.map((item, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
                {item.title}
              </h3>
              <p className="mt-3 text-zinc-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
