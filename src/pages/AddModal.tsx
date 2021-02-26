import React, { useState } from "react";
import {
  IonLabel,
  IonContent,
  IonSegment,
  IonSegmentButton,
  IonIcon,
  IonButton,
} from "@ionic/react";
import { fitnessOutline, peopleOutline, closeOutline } from "ionicons/icons";
import "./AddModal.css";
import AddArrivalComponent from "../components/AddArrivalComponent";
import AddWeightComponent from "../components/AddWeightComponent";

type MyModalProps = {
  closeAction: Function;
};

export const AddModal: React.FC<MyModalProps> = ({ closeAction }) => {
  const [selectedSegment, setSelectedSegment] = useState<string | undefined>(
    "arrival"
  );

  return (
    <IonContent className="ion-padding">
      <IonButton
        className="ion-float-right"
        fill="clear"
        onClick={() => closeAction()}
      >
        <IonIcon icon={closeOutline} />
      </IonButton>
      {/* Segment */}
      <IonSegment
        value={selectedSegment}
        onIonChange={(e) => setSelectedSegment(e.detail.value)}
      >
        <IonSegmentButton value="arrival">
          <IonIcon icon={peopleOutline} />
          <IonLabel>Příchod</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="weight">
          <IonIcon icon={fitnessOutline} />
          <IonLabel>Váha</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      {selectedSegment === "arrival" ? (
        <AddArrivalComponent closeAction={() => closeAction()} />
      ) : (
        <AddWeightComponent closeAction={() => closeAction()} />
      )}
    </IonContent>
  );
};
