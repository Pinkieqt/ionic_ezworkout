import React, { useState } from "react";
import {
  IonLabel,
  IonContent,
  IonSegment,
  IonSegmentButton,
  IonIcon,
  IonButton,
  IonGrid,
  IonRow,
  IonList,
  IonItem,
  IonCol,
  IonChip,
  IonInput,
} from "@ionic/react";
import { fitnessOutline, peopleOutline, closeOutline } from "ionicons/icons";
import "./AddModal.css";
import AddArrivalComponent from "../components/AddArrivalComponent";
import AddWeightComponent from "../components/AddWeightComponent";

type MyModalProps = {
  closeAction: Function;
  isItEditingModal: Boolean;
};

export const AddModal: React.FC<MyModalProps> = ({ closeAction, isItEditingModal }) => {
  const [selectedSegment, setSelectedSegment] = useState<string | undefined>("arrival");
  const [work, setWork] = useState(15);
  const [max, setMax] = useState(15);

  return (
    <IonContent className="ion-padding">
      {!isItEditingModal ? (
        <>
          <IonButton className="ion-float-right" fill="clear" onClick={() => closeAction()}>
            <IonIcon icon={closeOutline} />
          </IonButton>
          <IonSegment value={selectedSegment} onIonChange={(e) => setSelectedSegment(e.detail.value)}>
            <IonSegmentButton value="arrival">
              <IonIcon icon={peopleOutline} />
              <IonLabel>Příchod</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="weight">
              <IonIcon icon={fitnessOutline} />
              <IonLabel>Váha</IonLabel>
            </IonSegmentButton>
          </IonSegment>
          {selectedSegment === "arrival" ? <AddArrivalComponent closeAction={() => closeAction()} /> : <AddWeightComponent closeAction={() => closeAction()} />}{" "}
        </>
      ) : (
        <div className="edit-modal">
          {/* Content */}
          <IonList className="ion-padding ion-text-center">
            <IonItem lines="none" className="modal-header">
              <p>Deadlift</p>
            </IonItem>

            {/* Max Input input */}
            <IonItem lines="none" className="modal-subheader">
              <p>Maximální váha</p>
            </IonItem>
            <IonGrid>
              <IonRow className="ion-align-items-center">
                <IonCol size="3">
                  <IonChip outline color="primary" onClick={() => setMax(Math.round((max - 0.5) * 10) / 10)}>
                    <IonLabel>-</IonLabel>
                  </IonChip>
                </IonCol>
                <IonCol size="6">
                  <IonInput className="workmax-number-input" placeholder="váha" type="number" step="0.5" value={max} />
                </IonCol>
                <IonCol size="3">
                  <IonChip outline color="primary" onClick={() => setMax(Math.round((max + 0.5) * 10) / 10)}>
                    <IonLabel>+</IonLabel>
                  </IonChip>
                </IonCol>
              </IonRow>
            </IonGrid>

            {/* Work input */}
            <IonItem lines="none" className="modal-subheader">
              <p>Pracovní váha</p>
            </IonItem>
            <IonGrid>
              <IonRow className="ion-align-items-center">
                <IonCol size="3">
                  <IonChip outline color="primary" onClick={() => setWork(Math.round((work - 0.5) * 10) / 10)}>
                    <IonLabel>-</IonLabel>
                  </IonChip>
                </IonCol>
                <IonCol size="6">
                  <IonInput className="workmax-number-input" placeholder="váha" type="number" step="0.5" value={work} />
                </IonCol>
                <IonCol size="3">
                  <IonChip outline color="primary" onClick={() => setWork(Math.round((work + 0.5) * 10) / 10)}>
                    <IonLabel>+</IonLabel>
                  </IonChip>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonList>
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
        </div>
      )}
    </IonContent>
  );
};
