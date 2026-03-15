"use client";

import EnergyCalculatorGrid from "@/src/components/EnergyCalculatorGrid";
import EnergyCalculatorHero from "@/src/components/EnergyCalculatorHero";

export default function EnergyCalculatorScreen() {
  return (
    <div className="min-h-screen bg-gray-900">
      <EnergyCalculatorHero />
      <EnergyCalculatorGrid />
    </div>
  );
}
