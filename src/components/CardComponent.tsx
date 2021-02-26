import { IonCol, IonGrid, IonRow } from "@ionic/react";
import React from "react";

const CardComponent: React.FC = () => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol>ion-col</IonCol>
        <IonCol>ion-col</IonCol>
      </IonRow>
      <IonRow>
        <IonCol>ion-col</IonCol>
        <IonCol>ion-col</IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default CardComponent;
