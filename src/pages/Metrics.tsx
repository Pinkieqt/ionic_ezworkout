import React, { useState } from "react";
import {
  IonAlert,
  IonContent,
  IonHeader,
  IonIcon,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";
import "./Metrics.css";
import CardComponent from "../components/CardComponent";
import { trashOutline } from "ionicons/icons";

const Metrics: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState(localStorage.getItem("selectedUser"));
  const [showAlert, setShowAlert] = useState(false);

  useIonViewWillEnter(() => {
    setSelectedUser(localStorage.getItem("selectedUser"));
  });

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>Metriky</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* Content */}
        <IonList>
          <CardComponent isOnDashboard={false} cardsContent={null} />

          {/* Person picker */}
          <IonItem lines="none" className="ion-margin-top">
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

          {/* Chart */}

          {/* Infinite scroll */}
          <IonInfiniteScroll threshold="100px" className="ion-margin-top">
            <IonInfiniteScrollContent loadingSpinner="crescent" loadingText="Načítám další data">
              <IonItem button lines="none" onClick={() => setShowAlert(true)}>
                <IonIcon slot="end" icon={trashOutline} />
                <IonLabel>
                  <h2>79.5 Kg</h2>
                  <p>23.03.2021</p>
                </IonLabel>
              </IonItem>
            </IonInfiniteScrollContent>
          </IonInfiniteScroll>
        </IonList>

        {/* Alert */}
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={"Smazání uživatele"}
          message={"Opravdu smazat ... ?"}
          buttons={[
            {
              text: "Zrušit",
              role: "cancel",
              cssClass: "secondary",
              handler: (blah) => {
                console.log("Confirm Cancel: blah");
              },
            },
            {
              text: "Potvrdit",
              handler: () => {
                console.log("Confirm Okay");
              },
            },
          ]}
        />
      </IonContent>
    </IonPage>
  );
};

export default Metrics;
