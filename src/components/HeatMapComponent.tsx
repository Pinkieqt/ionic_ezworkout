import { IonChip, IonCol, IonGrid, IonLabel, IonRow } from "@ionic/react";
import React, { useState } from "react";

const HeatMapComponent: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  function content() {
    let tmp = [];

    for (let i = 0; i < 365; i++) {
      tmp.push(<div className="heatmap-cell" key={i}></div>);
    }

    return tmp;
  }

  return (
    <IonGrid>
      <IonRow className="ion-align-items-center ion-text-center">
        <IonCol size="2"></IonCol>
        <IonCol size="2">
          <IonChip outline color="primary" onClick={() => setSelectedYear(selectedYear - 1)}>
            <IonLabel>-</IonLabel>
          </IonChip>
        </IonCol>
        <IonCol size="4">
          <p className="heatmap-year">{selectedYear}</p>
          {/* <IonInput readonly className="year-number-input ion-text-center" placeholder="rok" type="number" step="1" value={selectedYear} /> */}
        </IonCol>
        <IonCol size="2">
          <IonChip outline color="primary" onClick={() => setSelectedYear(selectedYear + 1)}>
            <IonLabel>+</IonLabel>
          </IonChip>
        </IonCol>
        <IonCol size="2"></IonCol>
      </IonRow>

      {/* Legend */}
      <IonRow className="ion-justify-content-center ion-margin-bottom">
        <div className="heatmap-legend-cell">
          <p className="heatmap-legend-text">0</p>
        </div>
        <div className="heatmap-legend-cell">
          <p className="heatmap-legend-text">1</p>
        </div>
        <div className="heatmap-legend-cell">
          <p className="heatmap-legend-text">2</p>
        </div>
        <div className="heatmap-legend-cell">
          <p className="heatmap-legend-text">3</p>
        </div>
        <div className="heatmap-legend-cell">
          <p className="heatmap-legend-text">4</p>
        </div>
      </IonRow>

      {/* Heatmap */}
      <IonRow className="ion-justify-content-center ion-padding ion-margin-bottom">{content()}</IonRow>
    </IonGrid>
  );
};

export default HeatMapComponent;
