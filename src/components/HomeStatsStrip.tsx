import { MdBolt, MdBuild, MdHome, MdSunny } from "react-icons/md";

export default function HomeStatsStrip() {
  return (
    <section className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-8 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div
          data-scroll-reveal
          animate-on-scroll={"true"}
          className="flex flex-col items-center"
        >
          <div className="text-2xl md:text-3xl font-bold mb-1">
            <MdBolt className="text-2xl md:text-3xl" />
          </div>
          <p className="text-lg font-semibold">Zero Fuel Cost</p>
        </div>
        <div
          data-scroll-reveal
          animate-on-scroll={"true"}
          className="flex flex-col items-center"
        >
          <div className="text-2xl md:text-3xl font-bold mb-1">
            <MdSunny className="text-2xl md:text-3xl" />
          </div>
          <p className="text-lg font-semibold">Free Energy Forever</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-2xl md:text-3xl font-bold mb-1">
            <MdBuild className="text-2xl md:text-3xl" />
          </div>
          <p className="text-lg font-semibold">Lifetime Support</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-2xl md:text-3xl font-bold mb-1">
            <MdHome className="text-2xl md:text-3xl" />
          </div>
          <p className="text-lg font-semibold">Tailored Installs</p>
        </div>
      </div>
    </section>
  );
}
