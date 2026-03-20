import initialAppliances, {
  Appliance,
} from "@/src/constants/initialAppliances";

export interface AppState {
  app: {
    navBar: boolean;
    step: number;
  };
  energy: { totalWatt: number };
  appliances: Appliance[];
}

const appState: AppState = {
  app: { navBar: false, step: 0 },
  energy: { totalWatt: 0 },
  appliances: [...initialAppliances],
};

export default appState;
