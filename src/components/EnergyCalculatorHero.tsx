import { TypeAnimation } from "react-type-animation";

function EnergyCalculatorHero() {
  return (
    <div className="bg-gray-900">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <img src="/logo.png" alt="logo" className="h-8 w-auto" />
            </a>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm font-semibold text-white">
              Product
            </a>
            <a href="#" className="text-sm font-semibold text-white">
              Features
            </a>
            <a href="#" className="text-sm font-semibold text-white">
              Marketplace
            </a>
            <a href="#" className="text-sm font-semibold text-white">
              Company
            </a>
          </div>
        </nav>
      </header>

      <div className="relative px-6 lg:px-4">
        <div className="mx-auto max-w-2xl py-20 sm:py-48 lg:py-23 text-center">
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

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-400"
            >
              Get started
            </a>

            <a href="#" className="text-sm font-semibold text-white">
              Learn more →
            </a>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%,100% 61.6%,97.5% 26.9%,85.5% 0.1%,80.7% 2%,72.5% 32.5%,60.2% 62.4%,52.4% 68.1%,47.5% 58.3%,45.2% 34.5%,27.5% 76.7%,0.1% 64.9%,17.9% 100%,27.6% 76.8%,76.1% 97.7%,74.1% 44.1%)",
            }}
            className="relative left-1/2 w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-pink-400 to-indigo-400 opacity-30 sm:w-[72rem]"
          />
        </div>
      </div>
    </div>
  );
}

export default EnergyCalculatorHero;
