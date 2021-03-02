import { IonButton, IonChip, IonCol, IonGrid, IonInput, IonItem, IonLabel, IonList, IonRow, IonSelect, IonSelectOption, IonText } from "@ionic/react";
import React, { useState } from "react";
import "./Modals.css";

type MyModalProps = {
  closeAction: Function;
};

const AddWeightComponent: React.FC<MyModalProps> = ({ closeAction }) => {
  const [inputWeight, setInputWeight] = useState(33.3);
  const [selectedUser, setSelectedUser] = useState(localStorage.getItem("selectedUser"));

  return (
    <IonList className="ion-padding ion-text-center">
      {/* Weight Append */}
      <IonText className="ion-margin-bottom">
        <p>Vyber se, zadej svou váhu a poté ulož změny.</p>
      </IonText>

      {/* Person picker + weight picker */}
      <IonItem className="ion-margin-bottom" lines="none">
        <IonLabel>Uživatel</IonLabel>
        <IonSelect
          value={selectedUser}
          interface="action-sheet"
          onIonChange={(e) => {
            localStorage.setItem("selectedUser", e.detail.value);
            setSelectedUser(e.detail.value);
          }}
        >
          <IonSelectOption value="dudu">Dudu</IonSelectOption>
          <IonSelectOption value="luke">Luke</IonSelectOption>
          <IonSelectOption value="tom">Tom</IonSelectOption>
          <IonSelectOption value="dejvo">Dejvo</IonSelectOption>
        </IonSelect>
      </IonItem>

      {/* Input */}
      <IonGrid>
        <IonRow className="ion-align-items-center">
          <IonCol size="2">
            <IonChip outline color="primary" onClick={() => setInputWeight(Math.round((inputWeight - 0.1) * 10) / 10)}>
              <IonLabel>-</IonLabel>
            </IonChip>
          </IonCol>
          <IonCol size="8">
            <IonInput className="weight-number-input" placeholder="váha" type="number" step="0.1" value={inputWeight} />
          </IonCol>
          <IonCol size="2">
            <IonChip outline color="primary" onClick={() => setInputWeight(Math.round((inputWeight + 0.1) * 10) / 10)}>
              <IonLabel>+</IonLabel>
            </IonChip>
          </IonCol>
        </IonRow>
      </IonGrid>

      {/* Submit and Closing button */}
      <IonGrid>
        <IonRow className="ion-margin-top ion-justify-content-center">
          <IonButton fill="clear" onClick={() => closeAction()}>
            Zrušit
          </IonButton>
          <IonButton strong shape="round" onClick={() => closeAction()}>
            Uložit
          </IonButton>
        </IonRow>
      </IonGrid>
    </IonList>
  );
};

export default AddWeightComponent;
