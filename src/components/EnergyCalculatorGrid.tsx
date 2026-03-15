import { useState } from "react";

import initialAppliances, { Appliance } from "@/constants/initialAppliances";

function EnergyCalculatorGrid() {
  const [appliances, setAppliances] = useState<Appliance[]>([
    ...initialAppliances,
  ]);

  const totalWatt = appliances.reduce(
    (prev, curr) => prev + Number(curr.power) * Number(curr.quantity),
    0,
  );
  const kva = totalWatt / (1000 * 0.9);
  console.log(kva);

  const setAppliancePower = (id: number, power: string | number) => {
    if (Number(power) < 0) return;

    setAppliances((state) => {
      const newState = [...state];
      newState[id].power = !Number(power) ? "0" : Number(power).toString();
      return newState;
    });
  };

  const setApplianceName = (id: number, name: string) =>
    setAppliances((state) => {
      const newState = [...state];
      newState[id].name = name;
      return newState;
    });

  const setApplianceQuantity = (id: number, quantity: string | number) => {
    if (Number(quantity) > 99 || Number(quantity || !Number(quantity)) < 0)
      return;

    setAppliances((state) => {
      const newState = [...state];
      newState[id].quantity = quantity.toString();
      return newState;
    });
  };

  const setApplianceVariation = (id: number, type: string) => {
    setAppliances((state) => {
      const newState = [...state];

      const appliance = newState[id];
      const variation = appliance.variation?.find((v) => v.type === type);

      if (variation) {
        appliance.name = variation.type;
        appliance.power = variation.power;
      }

      return newState;
    });
  };
  return (
    <div className="flex justify-center items-center p-6">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-2xl font-bold mb-6 text-zinc-800">
          Energy Consumption Calculator
        </h1>

        <div className="space-y-5">
          {appliances.map((appliance, index) => (
            <div
              key={index}
              className="grid grid-cols-1 gap-4 md:grid-cols-4 items-center p-4 rounded-xl 
                bg-white shadow-md 
                hover:shadow-xl hover:-translate-y-1 
                transition duration-200"
            >
              {/* Name */}
              <div>
                {appliance.isEditable ? (
                  <input
                    type="text"
                    value={appliance.name}
                    onChange={(e) => setApplianceName(index, e.target.value)}
                    className="w-full border border-zinc-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                ) : appliance?.variation ? (
                  <select
                    value={appliance.name}
                    onChange={(e) =>
                      setApplianceVariation(index, e.target.value)
                    }
                    className="w-full font-semibold rounded-lg p-2 text-sm border border-zinc-300 focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    {appliance.variation.map((c) => (
                      <option key={c.type} value={c.type}>
                        {c.type}
                      </option>
                    ))}
                  </select>
                ) : (
                  <p className="font-semibold text-zinc-800">
                    {appliance.name}
                  </p>
                )}
              </div>

              {/* Quantity */}
              <input
                type="number"
                placeholder="Qty"
                value={
                  Number(appliance.quantity) <= 0 ? "" : appliance.quantity
                }
                onChange={(e) => setApplianceQuantity(index, e.target.value)}
                className="border border-zinc-300 rounded-lg p-2 text-sm placeholder:text-zinc-400  focus:ring-2 focus:ring-blue-500 outline-none"
              />

              {/* Power */}
              {appliance.isEditable ? (
                <input
                  type="number"
                  placeholder="Power (W)"
                  value={appliance.power}
                  onChange={(e) => setAppliancePower(index, e.target.value)}
                  className="border border-zinc-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
              ) : (
                <p className="text-zinc-600 text-sm">
                  {Number(appliance.power)} W each
                </p>
              )}

              {/* Total */}
              <p className="font-semibold text-blue-600">
                {Number(appliance.power) * Number(appliance.quantity)} W
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EnergyCalculatorGrid;
