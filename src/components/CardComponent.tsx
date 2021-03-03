import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonRow } from "@ionic/react";
import React from "react";

type CardProps = {
  isOnDashboard: Boolean;
  cardsContent: any;
};

const CardComponent: React.FC<CardProps> = ({ isOnDashboard, cardsContent }) => {
  return (
    <>
      {isOnDashboard ? (
        <IonGrid className="ion-text-center">
          <IonRow>
            <IonCol>
              <IonCard mode="ios" className="ion-no-margin" color="primary">
                <IonCardHeader>
                  <IonCardSubtitle>celkem příchodů</IonCardSubtitle>
                  <IonCardTitle>{cardsContent.total}</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard mode="ios" className="ion-no-margin" color="secondary">
                <IonCardHeader>
                  <IonCardSubtitle>rozdíl příchodů</IonCardSubtitle>
                  <IonCardTitle>{cardsContent.monthDiffer}</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard mode="ios" className="ion-no-margin" color="warning">
                <IonCardHeader>
                  <IonCardSubtitle>tento rok</IonCardSubtitle>
                  <IonCardTitle>{cardsContent.thisYear}</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard mode="ios" className="ion-no-margin" color="danger">
                <IonCardHeader>
                  <IonCardSubtitle>poslední příchod</IonCardSubtitle>
                  <IonCardTitle>{cardsContent.latest}</IonCardTitle>
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
