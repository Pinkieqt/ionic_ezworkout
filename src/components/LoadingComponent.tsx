import { IonContent, IonSpinner } from "@ionic/react";
import React from "react";

const LoadingComponent: React.FC = () => {
  return (
    <IonContent className="load-bg">
      <IonSpinner name="crescent" className="spinner" color="primary" />
    </IonContent>
  );
};

export default LoadingComponent;
