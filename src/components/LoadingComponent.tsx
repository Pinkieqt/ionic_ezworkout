import { IonContent, IonSpinner } from "@ionic/react";
import React from "react";

const LoadingComponent: React.FC = () => {
  return (
    <IonContent>
      <IonSpinner name="crescent" className="spinner" />
    </IonContent>
  );
};

export default LoadingComponent;
