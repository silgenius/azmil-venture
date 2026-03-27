import Image from "next/image";
import Link from "next/link";

// const items = [
//   { name: "Solar Panels", img: "/solar-panel-5.jpg", link: "panels" },
//   { name: "Inverters", img: "/solar-inverter.jpg", link: "inverters" },
//   { name: "Batteries", img: "/solar-battery-1.jpg", link: "batteries" },
//   { name: "Packages", img: "/solar-inverter-4.jpg", link: "packages" },
// ];

export default function HomeProducts() {
  return (
    <section className="py-20 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Complete Solar Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need for reliable power under one roof
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Solar Panels */}
          <Link href="/products?category=panels" className="group">
            <div className="h-full flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 text-center group-hover:-translate-y-2">
              <Image
                src="/solar-panel-5.jpg"
                alt="Solar Panels"
                width={80}
                height={80}
                className="mx-auto mb-6 rounded-2xl"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Solar Panels
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">
                High-efficiency panels for maximum energy harvest
              </p>
              <span className="text-green-600 font-bold text-xl mt-auto">
                Shop Panels →
              </span>
            </div>
          </Link>

          {/* Inverters */}
          <Link href="/products?category=inverters" className="group">
            <div className="h-full flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 text-center group-hover:-translate-y-2">
              <Image
                src="/solar-inverter.jpg"
                alt="Inverters"
                width={80}
                height={80}
                className="mx-auto mb-6 rounded-2xl"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Inverters
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Pure sine wave inverters for all appliances
              </p>
              <span className="text-green-600 font-bold text-xl mt-auto">
                Shop Inverters →
              </span>
            </div>
          </Link>

          {/* Batteries */}
          <Link href="/products?category=batteries" className="group">
            <div className="h-full flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 text-center group-hover:-translate-y-2">
              <Image
                src="/solar-battery-1.jpg"
                alt="Batteries"
                width={80}
                height={80}
                className="mx-auto mb-6 rounded-2xl"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Batteries
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Lithium & tubular for 24/7 backup
              </p>
              <span className="text-green-600 font-bold text-xl mt-auto">
                Shop Batteries →
              </span>
            </div>
          </Link>

          {/* Packages */}
          <Link href="/products?category=packages" className="group">
            <div className="h-full flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 text-center group-hover:-translate-y-2">
              <Image
                src="/solar-inverter-4.jpg"
                alt="Packages"
                width={80}
                height={80}
                className="mx-auto mb-6 rounded-2xl"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Full Packages
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Complete ready-to-install systems
              </p>
              <span className="text-green-600 font-bold text-xl mt-auto">
                View Packages →
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
