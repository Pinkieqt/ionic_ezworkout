import { IonButton, IonCheckbox, IonContent, IonGrid, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonRow } from "@ionic/react";
import { keyOutline, logInOutline } from "ionicons/icons";
import React, { useState } from "react";
import "./Login.css";
import image from "../images/small-login-bg.svg";

const Login: React.FC = () => {
  const [checked, setChecked] = useState(false);
  return (
    <IonPage>
      <IonContent fullscreen className="login-bg ion-padding">
        <img src={image} className="login-bg" />
        <div className="go-down-please">
          <h1 className="ion-text-center hello-text">Hello</h1>
          <p className="ion-text-center ion-margin-bottom">gym journal</p>
          <IonItem className="ion-padding ion-margin-bottom ion-margin-top ionitem-bg" lines="full">
            <IonIcon icon={keyOutline} slot="start"></IonIcon>
            {/* <IonLabel position="fixed" className="">
            Heslo
          </IonLabel> */}
            <IonInput type="password" placeholder="Heslo" required className=" "></IonInput>
          </IonItem>
          <IonItem className="ion-padding ionitem-bg" lines="none">
            <IonLabel>Zůstat přihlášen</IonLabel>
            <IonCheckbox checked={checked} onIonChange={(e) => setChecked(e.detail.checked)} />
          </IonItem>
          <IonButton type="submit" expand="block" color="primary" shape="round" className="ion-margin">
            <IonIcon icon={logInOutline} slot="end"></IonIcon>
            Přihlásit
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
