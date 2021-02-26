import {
  IonButton,
  IonChip,
  IonDatetime,
  IonGrid,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonText,
} from "@ionic/react";
import React, { useEffect, useState } from "react";

type MyModalProps = {
  closeAction: Function;
};

const AddArrivalComponent: React.FC<MyModalProps> = ({ closeAction }) => {
  const [selectedDate, setDate] = useState<string | null | undefined>(
    new Date().toISOString()
  );
  const [buttons, setButtons] = useState([
    { key: "dudu", label: "Dudu", went: false },
    { key: "luke", label: "Luke", went: false },
    { key: "tom", label: "Tom", went: false },
    { key: "dejvo", label: "Dejvo", went: false },
  ]);

  useEffect(() => {}, [buttons]);

  return (
    <IonList className="ion-padding ion-text-center">
      {/* <IonText>
        <p>Níže lze vybrat jiné datum pro pozdější zápisy.</p>
      </IonText> */}
      <IonItem>
        <IonLabel>Datum</IonLabel>
        <IonDatetime
          value={selectedDate}
          displayFormat="DD/MM/YYYY"
          placeholder="Select Date"
          onIonChange={(e) => setDate(e.detail.value)}
        ></IonDatetime>
      </IonItem>

      <IonText className="ion-margin-bottom">
        <p>Klikni na členy, kteří dnes přišli do posilovny a ulož změny.</p>
        {/* <p>O provedených změnách budeš informován.</p> */}
      </IonText>
      {buttons.map((el, i) => {
        return (
          <IonChip
            key={i}
            color="primary"
            className={el.went === true ? "btn_selected" : ""}
            onClick={() => {
              let tmpButtons = buttons;
              tmpButtons[i].went = !tmpButtons[i].went;
              setButtons([...tmpButtons]);
            }}
          >
            <IonLabel>{el.label}</IonLabel>
          </IonChip>
        );
      })}
      <IonGrid>
        <IonRow className="ion-margin-top ion-justify-content-center">
          <IonButton fill="clear" onClick={() => closeAction()}>
            Zrušit
          </IonButton>
          <IonButton strong shape="round" onClick={() => closeAction()}>
            Uložit
          </IonButton>
        </IonRow>
      </IonGrid>
    </IonList>
  );
};

export default AddArrivalComponent;
