"use client";

import EnergyCalculatorConfig from "@/src/components/EnergyCalculatorConfig";
import EnergyCalculatorFAQ from "@/src/components/EnergyCalculatorFAQ";
import EnergyCalculatorGrid from "@/src/components/EnergyCalculatorGrid";
import EnergyCalculatorHero from "@/src/components/EnergyCalculatorHero";
import RecommendedSystemGrid from "@/src/components/RecommendedSystemGrid";
import useAppContext from "@/src/hooks/useAppContext";
import { useEffect, useRef, useState } from "react";

const steps = [
  { id: 0, label: "Appliances" },
  { id: 1, label: "Configuration" },
  { id: 2, label: "Result" },
];

export function EnergyCalculatorScreen() {
  const [step, setStep] = useState(0);
  const [initialView, setInitialView] = useState(true);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const { state, dispatch } = useAppContext();

  // Smooth scroll on step change
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (initialView) {
        setInitialView(false);
        return;
      }
      contentRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [step]);

  const canProceed = state.energy.totalWatt > 0;
  const isNextDisabled =
    !canProceed ||
    step === steps.length - 1 ||
    (step === steps.length - 2 && !state.config.formIsValidated);

  const renderStep = () => {
    switch (step) {
      case 0:
        return <EnergyCalculatorGrid />;
      case 1:
        return <EnergyCalculatorConfig />;
      case 2:
        return <RecommendedSystemGrid />;
      default:
        return null;
    }
  };

  const handleStepClick = (id: number) => {
    if (id === 2 && !state.config.formIsValidated) {
      return;
    }
    if (
      step === steps.length - 2 &&
      !state.config.formIsValidated &&
      id > steps.length - 2
    )
      return;
    if (!canProceed) return;
    setStep(id);
  };

  const handleNext = () => {
    if (step === steps.length - 2 && !state.config.formIsValidated) return;
    if (!canProceed || step === steps.length - 1) return;
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (step === 0) {
      dispatch({ type: "RESET_APPLIANCES" });
    } else {
      setStep((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <EnergyCalculatorHero />

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Steps */}
        <div className="bg-white rounded-2xl shadow-lg p-2 mb-6">
          <div className="grid grid-cols-3 gap-2">
            {steps.map((s) => (
              <button
                key={s.id}
                onClick={() => handleStepClick(s.id)}
                className={`py-3 rounded-xl text-sm font-semibold transition
                  ${
                    step === s.id
                      ? "bg-gray-700 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div
          ref={contentRef}
          className="bg-white rounded-2xl shadow-xl p-4 md:p-6 scroll-mt-24"
        >
          {renderStep()}

          {/* Bottom Navigation */}
          <div className="flex justify-between mt-10">
            <button
              onClick={handleBack}
              className="px-6 py-2 rounded-lg bg-gray-200 disabled:opacity-40"
            >
              {step === 0 ? "Reset" : "Back"}
            </button>

            <button
              disabled={isNextDisabled}
              onClick={handleNext}
              className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      <EnergyCalculatorFAQ />
    </div>
  );
}

export default EnergyCalculatorScreen;
