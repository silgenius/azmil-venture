import initialAppliances, {
  Appliance,
} from "@/src/constants/initialAppliances";

export interface AppState {
  user: { name: string; email: string };
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
  };
}

const appState: AppState = {
  user: { name: "", email: "" },
  app: { navBar: false, step: 0 },
  energy: { totalWatt: 0 },
  appliances: [...initialAppliances],
  config: {
    systemType: "",
    dailyUsage: 0,
    formIsValidated: false,
  },
};

export default appState;
