import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonLabel, IonModal } from "@ionic/react";
import { modalController } from "@ionic/core";
import React, { useState } from "react";
import { AddModal } from "../pages/AddModal";
import "./Styles.css";

const EditRecordComponent: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  async function closeModal() {
    await modalController.dismiss();
    setShowModal(false);
  }

  return (
    <IonCard
      mode="ios"
      className="ion-no-margin"
      button
      onClick={() => {
        setShowModal(true);
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
      <IonCardContent>
        <p>Max: 93 kg</p>
        <p>Pracovní: 55 kg</p>
      </IonCardContent>

      {/* Prompt to change values */}
      {/* Append modal */}
      <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
        <AddModal closeAction={closeModal} isItEditingModal={true} />
      </IonModal>
    </IonCard>
  );
};

export default EditRecordComponent;
