import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import "./Settings.css";
import { moon, logOutOutline } from "ionicons/icons";

const Settings: React.FC = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ds</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Settings</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem lines="none">
          <IonIcon slot="start" icon={moon} />
          <IonLabel>Dark Mode</IonLabel>
          <IonToggle
            slot="end"
            name="darkMode"
            checked={theme === "dark" ? true : false}
            onIonChange={(e) => {
              if (e.detail.checked) {
                document.body.setAttribute("color-theme", "dark");
                localStorage.setItem("theme", "dark");
                setTheme("dark");
              } else {
                document.body.setAttribute("color-theme", "light");
                localStorage.setItem("theme", "light");
                setTheme("light");
              }
            }}
          />
        </IonItem>
        <IonItem
          lines="none"
          button
          onClick={() => {
            console.log("odhlasit");
          }}
        >
          <IonIcon slot="start" icon={logOutOutline} />
          <IonLabel>Odhlásit</IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
