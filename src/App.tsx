import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonFab,
  IonFabButton,
  IonIcon,
  IonModal,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { modalController } from "@ionic/core";
import {
  homeOutline,
  fitnessOutline,
  fileTrayFullOutline,
  cogOutline,
  addOutline,
} from "ionicons/icons";
import Dashboard from "./pages/Dashboard";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Metrics from "./pages/Metrics";
import Weights from "./pages/Weights";
import Settings from "./pages/Settings";
import { AddModal } from "./pages/AddModal";
import ArrivalHistoryComponent from "./components/ArrivalHistoryComponent";

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  async function closeModal() {
    await modalController.dismiss();
    setShowModal(false);
  }

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          {/* Router */}
          <IonRouterOutlet>
            <Route path="/dashboard" component={Dashboard} exact={true} />
            <Route path="/metrics" component={Metrics} exact={true} />
            <Route path="/weights" component={Weights} exact={true} />
            <Route path="/settings" component={Settings} exact={true} />
            <Route path="/history" component={ArrivalHistoryComponent} />
            <Route
              path="/"
              render={() => <Redirect to="/dashboard" />}
              exact={true}
            />
          </IonRouterOutlet>
          {/* TabBar */}
          <IonTabBar slot="bottom">
            <IonTabButton tab="dashboard" href="/dashboard">
              <IonIcon icon={homeOutline} />
              {/* <IonLabel>Home</IonLabel> */}
            </IonTabButton>
            <IonTabButton tab="metrics" href="/metrics">
              <IonIcon icon={fitnessOutline} />
              {/* <IonLabel>Metriky</IonLabel> */}
            </IonTabButton>
            <IonTabButton></IonTabButton>
            <IonTabButton tab="weights" href="/weights">
              <IonIcon icon={fileTrayFullOutline} />
              {/* <IonLabel>Váha</IonLabel> */}
            </IonTabButton>
            <IonTabButton tab="settings" href="/settings">
              <IonIcon icon={cogOutline} />
              {/* <IonLabel>Nastavení</IonLabel> */}
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
      {/* Append modal */}
      <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
        <AddModal closeAction={closeModal} />
      </IonModal>
      <IonFab vertical="bottom" horizontal="center" slot="fixed">
        <IonFabButton color="primary" onClick={() => setShowModal(true)}>
          <IonIcon icon={addOutline} />
        </IonFabButton>
      </IonFab>
    </IonApp>
  );
};

export default App;
