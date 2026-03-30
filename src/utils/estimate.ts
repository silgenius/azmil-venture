import {
  BATTERY_Wh_TO_COST,
  INVERTER_VA_TO_COST,
  VA_STEPS,
} from "../constants/systemConfigs";

export const estimateVA = (va: number): number => {
  if (va <= 0) return 0;
  const found = VA_STEPS.find((step) => va <= step);
  return found ?? VA_STEPS[VA_STEPS.length - 1];
};

export const estimateInverterCost = (
  va: number,
): { wh: number; price: number; volt: number } => {
  if (va <= 0) return { wh: 0, price: 0, volt: 0 };
  const k = Object.keys(INVERTER_VA_TO_COST);
  const found = k.find((step) => va <= Number(step));
  console.log("wh is: ", va, "found: ", found);
  if (found) {
    return { wh: found, ...INVERTER_VA_TO_COST[found] };
  } else {
    return { wh: k[k.length - 1], ...INVERTER_VA_TO_COST[k[k.length - 1]] };
  }
};

export const estimateBatteryCost = (
  wh: number,
): { wh: number; price: number; volt: number } => {
  if (wh <= 0) return { wh: 0, price: 0, volt: 0 };
  const k = Object.keys(BATTERY_Wh_TO_COST);
  const found = k.find((step) => wh <= Number(step));
  if (found) {
    return { wh: found, ...BATTERY_Wh_TO_COST[found] };
  } else {
    return { wh: k[k.length - 1], ...BATTERY_Wh_TO_COST[k[k.length - 1]] };
  }
};
