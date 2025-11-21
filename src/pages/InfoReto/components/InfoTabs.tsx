import Tabs from "../../../components/Tabs";
import { Challenge } from "./TabsComponents/Challenge";
import { Deliverables } from "./TabsComponents/Deliverables";
import { Evaluation } from "./TabsComponents/Evaluation";
import { Guidelines } from "./TabsComponents/Guidelines";
import { ParticipationMechanism } from "./TabsComponents/ParticipationMechanism";
import { PitchInnovation } from "./TabsComponents/PitchInnovation";
import { TrainingSchedule } from "./TabsComponents/TrainingSchedule";



export function InfoTabs() {
  return (
    <div className="">
        <h2 className="hero-title text-3xl font-bold text-center pt-40 mb-8">¡Todo lo que debes saber acerca de la competencia!</h2>
      <Tabs
        tabs={[
          { label: "Mecanismo de participación", content: <ParticipationMechanism />},
          { label: "Cronograma Formativo", content: <TrainingSchedule />},
          { label: "Categorías de Proyecto", content: <Challenge />},
          { label: "Pitch de Innovación", content: < PitchInnovation />},
          { label: "Pautas a Considerar", content: <Guidelines />},
          { label: "Entregables", content: < Deliverables />},
          { label: "Evaluación", content: < Evaluation />},
          
        ]}
      />
    </div>
  );
}