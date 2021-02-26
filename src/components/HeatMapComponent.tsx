import {
  IonChip,
  IonCol,
  IonGrid,
  IonInput,
  IonLabel,
  IonRow,
} from "@ionic/react";
import React, { useState } from "react";

const HeatMapComponent: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  return (
    <IonGrid>
      <IonRow className="ion-align-items-center">
        <IonCol size="2"></IonCol>
        <IonCol size="2">
          <IonChip
            outline
            color="primary"
            onClick={() => setSelectedYear(selectedYear - 1)}
          >
            <IonLabel>-</IonLabel>
          </IonChip>
        </IonCol>
        <IonCol size="4" className="ion-align-items-center">
          <IonInput
            className="year-number-input"
            placeholder="rok"
            type="number"
            step="0.1"
            value={selectedYear}
          />
        </IonCol>
        <IonCol size="2">
          <IonChip
            outline
            color="primary"
            onClick={() => setSelectedYear(selectedYear + 1)}
          >
            <IonLabel>+</IonLabel>
          </IonChip>
        </IonCol>
        <IonCol size="2"></IonCol>
      </IonRow>
      <IonRow>copntent</IonRow>
    </IonGrid>
  );
};

export default HeatMapComponent;
