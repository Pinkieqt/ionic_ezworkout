import React, { useEffect, useState } from "react";
import {
  IonLabel,
  IonButton,
  IonContent,
  IonSegment,
  IonSegmentButton,
  IonIcon,
  IonItem,
  IonDatetime,
  IonText,
  IonChip,
  IonSelect,
  IonSelectOption,
  IonInput,
} from "@ionic/react";
import { fitnessOutline, peopleOutline } from "ionicons/icons";
import "./AddModal.css";

type MyModalProps = {
  closeAction: Function;
};

export const AddModal: React.FC<MyModalProps> = ({ closeAction }) => {
  const [selectedSegment, setSelectedSegment] = useState<string | undefined>(
    "arrival"
  );
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
    <IonContent className="ion-padding">
      {/* Segment */}
      <IonSegment
        value={selectedSegment}
        onIonChange={(e) => setSelectedSegment(e.detail.value)}
      >
        <IonSegmentButton value="arrival">
          <IonIcon icon={peopleOutline} />
          <IonLabel>Příchod</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="weight">
          <IonIcon icon={fitnessOutline} />
          <IonLabel>Váha</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      {selectedSegment === "arrival" ? (
        <IonContent>
          {/* Arrival */}
          {/* Date picker */}
          <IonText>
            <p>Níže lze vybrat jiné datum pro pozdější zápisy.</p>
          </IonText>
          <IonItem>
            <IonLabel>Datum zapsání</IonLabel>
            <IonDatetime
              value={selectedDate}
              displayFormat="DD/MM/YYYY"
              placeholder="Select Date"
              onIonChange={(e) => setDate(e.detail.value)}
            ></IonDatetime>
          </IonItem>

          <IonText>
            <p>Klikni na členy, kteří dnes přišli do posilovny a ulož změny.</p>
            <p>O provedených změnách budeš informován.</p>
          </IonText>
          {/* Select people */}
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

          <IonButton onClick={() => closeAction()}>Zrušit</IonButton>
          <IonButton onClick={() => closeAction()}>Uložit</IonButton>
        </IonContent>
      ) : (
        <IonContent>
          {/* Weight Append */}
          <IonText>
            <p>Vyber se, zadej svou váhu a poté ulož změny.</p>
          </IonText>
          {/* Person picker + weight picker */}
          <IonItem>
            <IonLabel>Uživatel</IonLabel>
            <IonSelect value="notifications" interface="action-sheet">
              <IonSelectOption value="dudu">Dudu</IonSelectOption>
              <IonSelectOption value="luke">Luke</IonSelectOption>
              <IonSelectOption value="tom">Tom</IonSelectOption>
              <IonSelectOption value="dejvo">Dejvo</IonSelectOption>
            </IonSelect>
          </IonItem>
          {/* Input */}
          <IonInput placeholder="_ kg" type="number" />
          {/* Submit and Closing button */}
          <IonButton onClick={() => closeAction()}>Zrušit</IonButton>
          <IonButton onClick={() => closeAction()}>Uložit</IonButton>
        </IonContent>
      )}
    </IonContent>
  );
};
