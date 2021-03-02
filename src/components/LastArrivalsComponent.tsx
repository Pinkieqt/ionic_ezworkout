import { IonIcon, IonItem, IonLabel, IonList } from "@ionic/react";
import { personOutline } from "ionicons/icons";
import React, { useState } from "react";

const LastArrivalsComponent: React.FC = () => {
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
