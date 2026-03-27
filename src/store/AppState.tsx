import initialAppliances, {
  Appliance,
} from "@/src/constants/initialAppliances";

export interface AppState {
  user: { name: string; email: string; address: string };
  app: {
    navBar: boolean;
    step: number;
  };
  energy: { totalWatt: number };
  appliances: Appliance[];
  config: {
    systemType: "" | "ongrid" | "offgrid";
    dailyUsage: number;
    formIsValidated: boolean;
    batteryType: "" | "lithium" | "wet" | "dry";
  };
}

const appState: AppState = {
  user: { name: "", email: "", address: "" },
  app: { navBar: false, step: 0 },
  energy: { totalWatt: 0 },
  appliances: [...initialAppliances],
  config: {
    systemType: "",
    dailyUsage: 0,
    batteryType: "",
    formIsValidated: false,
  },
};

export default appState;
