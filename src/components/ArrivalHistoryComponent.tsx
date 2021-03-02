import {
  IonAlert,
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { personOutline } from "ionicons/icons";
import React, { useState } from "react";

const ArrivalHistoryComponent: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="Zpět" />
          </IonButtons>
          <IonTitle>Příchody</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonInfiniteScroll threshold="100px">
          <IonInfiniteScrollContent loadingSpinner="crescent" loadingText="Načítám další příchody">
            <IonItem button lines="none" onClick={() => setShowAlert(true)}>
              <IonIcon slot="start" icon={personOutline} color="primary" />
              <IonLabel>
                <h2>Dudu</h2>
                <p>23.03.2021</p>
              </IonLabel>
            </IonItem>
          </IonInfiniteScrollContent>
        </IonInfiniteScroll>

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

export default ArrivalHistoryComponent;
