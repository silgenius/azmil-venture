import Image from "next/image";

// const projects = [
//   {
//     title: "Ogba Residence",
//     img: "/ogbaresidence1.jpg",
//     subtitle: "5kW Off-Grid System",
//     desc: "Powers entire home including AC.",
//   },
//   {
//     title: "Ikeja Corporate",
//     img: "/ikejaimg-1.jpg",
//     subtitle: "12kW Hybrid System",
//     desc: "Backup for office operations.",
//   },
//   {
//     title: "Lekki Luxury Villa",
//     img: "/lekkivilla-2.jpg",
//     subtitle: "8kW Premium System",
//     desc: "24/7 power for luxury living.",
//   },
// ];

export default function HomePortfolioSection() {
  return (
    <section className="py-20 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Real Projects
          </h2>
          <p className="text-xl text-gray-600">
            Trusted installations across Lagos & Nigeria
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
            <Image
              src="/ogbaresidence1.jpg"
              alt="Ogba Residence"
              width={400}
              height={250}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Ogba Residence
              </h3>
              <p className="text-green-600 font-semibold mb-4">
                5kW Off-Grid System
              </p>
              <p className="text-gray-600">
                Powers entire home including AC. Zero outages since 2023.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
            <Image
              src="/ikejaimg-1.jpg"
              alt="Ikeja Office"
              width={400}
              height={250}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Ikeja Corporate
              </h3>
              <p className="text-green-600 font-semibold mb-4">
                12kW Hybrid System
              </p>
              <p className="text-gray-600">
                Backup for 50 staff office. NEPA-independent.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
            <Image
              src="/lekkivilla-2.jpg"
              alt="Lekki Villa"
              width={400}
              height={250}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Lekki Luxury Villa
              </h3>
              <p className="text-green-600 font-semibold mb-4">
                8kW Premium System
              </p>
              <p className="text-gray-600">
                Pool, gym & home cinema powered 24/7.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
