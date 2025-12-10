import Tabs from "../../../../components/Tabs";
import { Challenge } from "../../../InfoReto/components/TabsComponents/Challenge";
import { Evaluation } from "../../../InfoReto/components/TabsComponents/Evaluation";
import { DeliverablesUni } from "./components/DeliverablesUni";
import { GuidelinesUni } from "./components/GuidelinesUni";
import { ParticipationMechanismUni } from "./components/ParticipationMechanismUni";
import { PitchInnovationUni } from "./components/PitchInnovationUni";
import { TrainingScheduleUni } from "./components/TrainingScheduleUni";



export function InfoTabsUniversity() {
  return (
    <div className="">
        <h2 className="text-primary text-3xl font-bold text-center pt-40 mb-8">¡Todo lo que debes saber acerca de la competencia!</h2>
      <Tabs
        tabs={[
          { label: "Mecanismo de participación", content: <ParticipationMechanismUni />},
          { label: "Cronograma", content: <TrainingScheduleUni />},
          { label: "Sectores productivos", content: <Challenge />},
          { label: "Pitch de innovación", content: < PitchInnovationUni />},
          { label: "Pautas a considerar", content: <GuidelinesUni />},
          { label: "Entregables", content: < DeliverablesUni />},
          { label: "Evaluación", content: < Evaluation />},
          
        ]}
      />
    </div>
  );
}