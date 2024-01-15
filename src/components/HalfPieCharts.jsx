import React from "react";
import { useState , useEffect} from "react";
import SmallHalfpieChart from "./SmallHalfpieChart";
import BigHalfpieChart from "./BigHalfPieChart";
import { fetchEmotioninfo } from "./../js/fetch.js";

const HalfPieCharts = () => {
const [emotions, setEmotions] = useState(null);

useEffect(() => {
    const fetchemotions = async () => {
      const { response, data } = await fetchEmotioninfo();

      if (response.status === 200) {
        setEmotions(data);
      }
    };
    fetchemotions();
    }, []);

    if (emotions === null) {
        return <div>Loading...</div>;
      }
      
      if (!emotions) {
        return <div>Error fetching data</div>;
      }
const indiceGeneral= emotions.porcentaje_Indice_general;
const enviroment= emotions.porcentaje_EnvironmentSatisfaction;
const porcentaje_JobInvolvement= emotions.porcentaje_JobInvolvement;
const porcentaje_JobSatisfaction= emotions.porcentaje_JobSatisfaction;
const porcentaje_PerformanceRating= emotions.porcentaje_PerformanceRating;
const porcentaje_RelationshipSatisfaction= emotions.porcentaje_RelationshipSatisfaction;
const porcentaje_WorkLifeBalance= emotions.porcentaje_WorkLifeBalance;

return (
    <div className="halfpie-charts-container">
        <div className="halfpie-charts-left">
            <div className="halfpie-charts-left-top">
                <h1>Índice de Satisfación general</h1>
                <h3>Del 01 Dic. 2023 al 31 Dic. 2023</h3>
            </div>
            <div className="halfpie-charts-left-bottom">
                <BigHalfpieChart data={indiceGeneral} />
            </div>
        </div>
        <div className="halfpie-charts-right">
            <div className="halfpie-charts-right-top">
                <SmallHalfpieChart data={{ title: 'Relationship Satisfaction', value: porcentaje_RelationshipSatisfaction }} />
                <SmallHalfpieChart data={{ title: 'Environment Satisfaction', value: enviroment }} />
                <SmallHalfpieChart data={{ title: 'Job Involvement', value: porcentaje_JobInvolvement }} />
            </div>
            <div className="halfpie-charts-right-bottom">
                <SmallHalfpieChart data={{ title: 'Job Satisfaction', value: porcentaje_JobSatisfaction }} />
                <SmallHalfpieChart data={{ title: 'Performance Rating', value: porcentaje_PerformanceRating }} />
                <SmallHalfpieChart data={{ title: 'Work Life Balance', value: porcentaje_WorkLifeBalance }} />
            </div>
        </div>
    </div>
);

}


export default HalfPieCharts;