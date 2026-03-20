import initialAppliances, {
  Appliance,
} from "@/src/constants/initialAppliances";
import { AppState } from "./AppState";

export type Action =
  | {
      type: "SET_APPLIANCE_POWER";
      payload: { id: number; power: string | number };
    }
  | {
      type: "SET_APPLIANCE_NAME";
      payload: { id: number; name: string };
    }
  | {
      type: "SET_APPLIANCE_QUANTITY";
      payload: { id: number; quantity: string | number };
    }
  | {
      type: "SET_APPLIANCE_VARIATION";
      payload: { id: number; type: string };
    }
  | {
      type: "RESET_APPLIANCES";
    }
  | {
      type: "CLOSE_NAV_BAR";
    }
  | {
      type: "OPEN_NAV_BAR";
    };

const appReducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case "SET_APPLIANCE_POWER": {
      const { power, id } = action.payload;
      if (Number(power) < 0) return state;

      const newAppliance = [...state.appliances];
      newAppliance[id].power = !Number(power) ? "0" : Number(power).toString();
      return {
        app: { ...state.app },
        energy: { ...state.energy },
        appliances: newAppliance,
      };
    }

    case "SET_APPLIANCE_NAME": {
      const { name, id } = action.payload;

      const newAppliance = [...state.appliances];
      newAppliance[id].name = name || "";
      return {
        app: { ...state.app },
        energy: { ...state.energy },
        appliances: newAppliance,
      };
    }

    case "SET_APPLIANCE_QUANTITY": {
      const { quantity, id } = action.payload;
      if (Number(quantity) > 99 || Number(quantity || !Number(quantity)) < 0)
        return state;

      const totalWatt = state.appliances.reduce(
        (prev, curr) => prev + Number(curr.power) * Number(curr.quantity),
        0,
      );

      const newAppliance = [...state.appliances];
      newAppliance[id].quantity = quantity?.toString() || "";
      return {
        app: { ...state.app },
        energy: { totalWatt },
        appliances: newAppliance,
      };
    }

    case "SET_APPLIANCE_VARIATION": {
      const { type, id } = action.payload;
      const newAppliance = [...state.appliances];

      const appliance = newAppliance[id];
      const variation = appliance.variation?.find((v) => v.type === type);

      if (variation) {
        appliance.name = variation.type;
        appliance.power = variation.power;
      }

      return {
        app: { ...state.app },
        energy: { ...state.energy },
        appliances: newAppliance,
      };
    }
    case "CLOSE_NAV_BAR": {
      return {
        app: { navBar: false, step: 0 },
        energy: { ...state.energy },
        appliances: [...initialAppliances],
      };
    }
    case "OPEN_NAV_BAR": {
      return {
        app: { navBar: true, step: 0 },
        energy: { ...state.energy },
        appliances: [...initialAppliances],
      };
    }
    case "RESET_APPLIANCES": {
      const appliances = state.appliances.map((v) => {
        const appliance: Appliance = {
          hrs: "0",
          isEditable: false,
          isSelected: false,
          name: v.variation ? v.variation[0].type : v.name,
          power: v.variation ? v.variation[0].power : v.power,
          quantity: "0",
        };

        if (v.variation) {
          appliance["variation"] = v.variation;
        }

        return appliance;
      });
      return {
        app: { navBar: false, step: 0 },
        energy: { totalWatt: 0 },
        appliances,
      };
    }
    default: {
      return state;
    }
  }
};

export default appReducer;
