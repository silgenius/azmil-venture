import EnergyCalculatorScreen from "@/src/components/EnergyCalculatorScreen";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Energy Calculator",
  description:
    "Calculate your energy needs and find the perfect solar system for your home or business with AZMIL Power.",

  keywords: [
    "solar calculator Nigeria",
    "energy consumption calculator",
    "solar system size calculator",
    "power usage estimator",
  ],

  openGraph: {
    title: "Solar Energy Calculator | AZMIL Power",
    description:
      "Estimate your power needs and discover the right solar solution instantly.",
    url: "https://azmilsolar.com/energy_calculator",
  },
};

export default function Page() {
  return <EnergyCalculatorScreen />;
}
