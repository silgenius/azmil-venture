import { TypeAnimation } from "react-type-animation";

function EnergyCalculatorHero() {
  return (
    <div className="bg-gray-900">
      <div className="px-6 lg:px-4">
        <div className="mx-auto max-w-2xl py-5 sm:py-24 lg:py-12 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-7xl">
            <TypeAnimation
              sequence={["Find the Right Solar System for Your Need", 2000]}
              speed={50}
              wrapper="span"
              cursor={true}
              repeat={0}
            />
          </h1>

          <p className="mt-8 text-lg text-gray-400 sm:text-xl">
            Not sure what size solar system you need? Our free solar energy
            calculator helps you estimate the solar panel system size, battery
            capacity, and inverter power required for your home or business.
          </p>
        </div>
      </div>
    </div>
  );
}

export default EnergyCalculatorHero;
