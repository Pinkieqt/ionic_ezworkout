import React from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonListHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Dashboard.css";
import { arrowForwardOutline } from "ionicons/icons";
import HeatMapComponent from "../components/HeatMapComponent";
import CardComponent from "../components/CardComponent";

const Dashboard: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Dashboard</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* Content */}
        <IonList>
          <IonItem lines="none">
            <CardComponent />
          </IonItem>

          <IonListHeader mode="ios">Příchody</IonListHeader>
          <IonItem lines="none">
            <IonText>
              <p>
                V grafu níže lze pozorovat měsíční srovnání příchodů v
                jednotlivých letech.
              </p>
            </IonText>
          </IonItem>

          <IonItem lines="none">
            <IonText>
              <p>Příchody jednotlivých členů</p>
            </IonText>
          </IonItem>

          <IonItem lines="none">
            <IonText>
              <p>Poslední příchody</p>
            </IonText>
          </IonItem>

          <IonListHeader mode="ios">Historie příchodů</IonListHeader>
          <IonItem lines="none">
            <IonText>
              <p>
                Pro zobrazení historie příchodů a jejich správu, klikni na
                tlačítko níže.
              </p>
            </IonText>
          </IonItem>
          <IonButton
            expand="block"
            size="default"
            fill="clear"
            routerLink="/history"
          >
            Historie/správa příchodů <IonIcon icon={arrowForwardOutline} />
          </IonButton>

          <IonListHeader mode="ios">Heat mapa</IonListHeader>
          <IonItem lines="none">
            <HeatMapComponent />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
