import initialAppliances, {
  Appliance,
} from "@/src/constants/initialAppliances";

export interface AppState {
  app: {
    navBar: boolean;
  };
  appliances: Appliance[];
}

const appState: AppState = {
  app: { navBar: false },
  appliances: [...initialAppliances],
};

export default appState;
