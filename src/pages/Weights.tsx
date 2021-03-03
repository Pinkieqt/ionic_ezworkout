import React, { useState } from "react";
import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";
import "./Weights.css";
import EditRecordComponent from "../components/EditRecordComponent";

const Weights: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState(localStorage.getItem("selectedUser"));
  const [selectedGroup, setSelectedGroup] = useState("all");

  useIonViewWillEnter(() => {
    setSelectedUser(localStorage.getItem("selectedUser"));
  });

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>Váhy</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* Person picker */}
        <IonItem lines="none">
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

        {/* Exercise set picker */}
        <IonItem lines="none">
          <IonLabel>Svalová skupina</IonLabel>
          <IonSelect
            value={selectedGroup}
            interface="action-sheet"
            onIonChange={(e) => {
              setSelectedGroup(e.detail.value);
            }}
          >
            <IonSelectOption value="all">Všechny</IonSelectOption>
            <IonSelectOption value="legs">Nohy</IonSelectOption>
            <IonSelectOption value="chest">Hrudník</IonSelectOption>
            <IonSelectOption value="arms">Ruce</IonSelectOption>
            <IonSelectOption value="back">Záda</IonSelectOption>
            <IonSelectOption value="shoulders">Ramena</IonSelectOption>
          </IonSelect>
        </IonItem>

        {/* Tables */}
        <IonGrid>
          <IonRow>
            <IonCol size="6">
              <EditRecordComponent />
            </IonCol>
            <IonCol size="6">
              <EditRecordComponent />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Weights;
