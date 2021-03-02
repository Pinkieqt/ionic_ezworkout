import React from "react";
import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonList, IonListHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import "./Dashboard.css";
import { arrowForwardOutline } from "ionicons/icons";
import HeatMapComponent from "../components/HeatMapComponent";
import CardComponent from "../components/CardComponent";
import LastArrivalsComponent from "../components/LastArrivalsComponent";

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
          <CardComponent isOnDashboard={true} />

          {/* Charts */}
          <IonListHeader mode="ios">Příchody</IonListHeader>
          <IonItem lines="none">
            <p>V grafu níže lze pozorovat měsíční srovnání příchodů v jednotlivých letech.</p>
          </IonItem>

          <IonItem lines="none">
            <p>Příchody jednotlivých členů</p>
          </IonItem>

          {/* Last arrivals */}
          <IonItem lines="none">
            <p>Poslední příchody</p>
          </IonItem>

          <LastArrivalsComponent />

          <IonListHeader mode="ios">Historie příchodů</IonListHeader>
          <IonItem lines="none">
            <p>Pro zobrazení historie příchodů a jejich správu, klikni na tlačítko níže.</p>
          </IonItem>
          <IonButton expand="block" size="default" fill="clear" routerLink="/history">
            Historie/správa příchodů <IonIcon icon={arrowForwardOutline} />
          </IonButton>

          {/* Heat map */}
          <IonListHeader mode="ios">Heat mapa</IonListHeader>
          <HeatMapComponent />
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
