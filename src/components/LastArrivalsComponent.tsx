import { IonIcon, IonItem, IonLabel, IonList } from "@ionic/react";
import { personOutline } from "ionicons/icons";
import React, { useState } from "react";

const LastArrivalsComponent: React.FC = () => {
  // // Function to get last 5
  // function generateContent(){
  //   //Map latest arrivals to html
  //   latestArrivals = latestArrivals.slice(0, 5).map((element) => {
  //     let tmpDate = element.date.getDate() + "." + (element.date.getMonth() + 1) + ".";

  //     let iconColor = "text-magma-1";
  //     if (element.member === "Luke") iconColor = "text-magma-2";
  //     else if (element.member === "Tom") iconColor = "text-magma-3";
  //     else if (element.member === "Dudu") iconColor = "text-magma-4";
  //     else if (element.member === "Cahlik") iconColor = "text-magma-5";

  //     return <div></div>;
  //   });}

  return (
    <IonList className="ion-padding">
      <IonItem lines="none">
        <IonIcon slot="start" icon={personOutline} />
        <IonLabel>
          <h2>Dudu</h2>
          <p>23.03.2021</p>
        </IonLabel>
      </IonItem>
      <IonItem lines="none">
        <IonIcon slot="start" icon={personOutline} />
        <IonLabel>
          <h2>Dudu</h2>
          <p>23.03.2021</p>
        </IonLabel>
      </IonItem>
      <IonItem lines="none">
        <IonIcon slot="start" icon={personOutline} />
        <IonLabel>
          <h2>Dudu</h2>
          <p>23.03.2021</p>
        </IonLabel>
      </IonItem>
      <IonItem lines="none">
        <IonIcon slot="start" icon={personOutline} />
        <IonLabel>
          <h2>Dudu</h2>
          <p>23.03.2021</p>
        </IonLabel>
      </IonItem>
      <IonItem lines="none">
        <IonIcon slot="start" icon={personOutline} />
        <IonLabel>
          <h2>Dudu</h2>
          <p>23.03.2021</p>
        </IonLabel>
      </IonItem>
    </IonList>
  );
};

export default LastArrivalsComponent;
