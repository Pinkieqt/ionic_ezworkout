import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonLabel,
} from "@ionic/react";
import React from "react";
import "./Styles.css";

const EditRecordComponent: React.FC = () => {
  return (
    <IonCard
      mode="ios"
      className="ion-no-margin"
      button
      onClick={() => {
        console.log("odhlasit");
      }}
    >
      <IonCardHeader className="card_header_padding">
        <IonCardSubtitle>
          <IonChip color="primary" className="card_chip">
            <IonLabel color="primary">nohy</IonLabel>
          </IonChip>
        </IonCardSubtitle>
        <IonCardTitle className="card_title">Deadlift</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>dsadas</IonCardContent>
    </IonCard>
  );
};

export default EditRecordComponent;
