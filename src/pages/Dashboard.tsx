import React, { useContext, useEffect, useState } from "react";
import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonList, IonListHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import "./Dashboard.css";
import { arrowForwardOutline } from "ionicons/icons";
import HeatMapComponent from "../components/HeatMapComponent";
import CardComponent from "../components/CardComponent";
import LastArrivalsComponent from "../components/LastArrivalsComponent";
import { DataContext } from "../App";

const Dashboard: React.FC = () => {
  const usersData = useContext(DataContext);
  const [arrivalsModalContent, setArrivalsModalContent] = useState<any>([]);
  const [arrivalsTableContent, setArrivalsTableContent] = useState<any>([]);
  const [cardContent, setCardContent] = useState<any>([]);

  // Function to generate content for dashboard
  function generateContent() {
    let thisYear = 0;
    let total = 0;
    let latest: any = 0;
    let monthLastYear = 0;
    let monthThisYear = 1;

    let latestArrivals: any[] = [];
    if (usersData !== null) {
      usersData.forEach((user: any) => {
        let userArrivalsEveryYear = { name: user.name };

        user.arrivals.forEach((arrival: any) => {
          //Counting
          total++;
          let nDate = new Date();
          if (arrival.toDate().getFullYear() === nDate.getFullYear()) thisYear++;

          if (arrival.toDate().getFullYear() === nDate.getFullYear() - 1 && arrival.toDate().getMonth() === nDate.getMonth()) monthLastYear++;
          if (arrival.toDate().getFullYear() === nDate.getFullYear() && arrival.toDate().getMonth() === nDate.getMonth()) monthThisYear++;

          if (arrival > latest) latest = arrival;

          //Latest arrivals table
          latestArrivals.push({
            member: user.name,
            date: arrival.toDate(),
            key: total,
          });
        });
      });
      //Sort latest arrivals
      latestArrivals = latestArrivals.sort((a, b) => b.date - a.date);
      setArrivalsModalContent(latestArrivals.slice());

      let date = latest.toDate().getDate() + "." + (latest.toDate().getMonth() + 1) + ".";

      setArrivalsTableContent(latestArrivals);
      setCardContent({
        thisYear: thisYear,
        total: total,
        latest: date,
        monthDiffer: monthThisYear - monthLastYear - 1,
      });
    }
  }

  // useEffect
  useEffect(() => {
    generateContent();
  }, [usersData]);

  //
  // Render
  //
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* Content */}
        <IonList>
          <CardComponent isOnDashboard={true} cardsContent={cardContent} />

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
