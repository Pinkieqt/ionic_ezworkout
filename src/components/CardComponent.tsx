import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonRow } from "@ionic/react";
import React from "react";

type CardProps = {
  isOnDashboard: Boolean;
};

const CardComponent: React.FC<CardProps> = ({ isOnDashboard }) => {
  return (
    <>
      {isOnDashboard ? (
        <IonGrid className="ion-text-center">
          <IonRow>
            <IonCol>
              <IonCard mode="ios" className="ion-no-margin" color="primary">
                <IonCardHeader>
                  <IonCardSubtitle>deadlift</IonCardSubtitle>
                  <IonCardTitle>675</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard mode="ios" className="ion-no-margin" color="secondary">
                <IonCardHeader>
                  <IonCardSubtitle>deadlift</IonCardSubtitle>
                  <IonCardTitle>675</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard mode="ios" className="ion-no-margin" color="warning">
                <IonCardHeader>
                  <IonCardSubtitle>deadlift</IonCardSubtitle>
                  <IonCardTitle>675</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard mode="ios" className="ion-no-margin" color="danger">
                <IonCardHeader>
                  <IonCardSubtitle>deadlift</IonCardSubtitle>
                  <IonCardTitle>675</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow></IonRow>
        </IonGrid>
      ) : (
        <IonGrid className="ion-text-center">
          <IonRow>
            <IonCol>
              <IonCard mode="ios" className="ion-no-margin" color="primary">
                <IonCardHeader>
                  <IonCardSubtitle>smth</IonCardSubtitle>
                  <IonCardTitle>675</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard mode="ios" className="ion-no-margin" color="secondary">
                <IonCardHeader>
                  <IonCardSubtitle>smth</IonCardSubtitle>
                  <IonCardTitle>675</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard mode="ios" className="ion-no-margin" color="warning">
                <IonCardHeader>
                  <IonCardSubtitle>smth</IonCardSubtitle>
                  <IonCardTitle>675</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      )}
    </>
  );
};

export default CardComponent;
