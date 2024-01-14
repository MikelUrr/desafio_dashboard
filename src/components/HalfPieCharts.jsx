import React from "react";
import { useState } from "react";
import SmallHalfpieChart from "./SmallHalfpieChart";
import BigHalfpieChart from "./BigHalfPieChart";


const HalfPieCharts = () => {

    return (
        <div className="halfpie-charts-container">
            <div className="halfpie-charts-left">
                <div className="halfpie-charts-left-top">
                    <h1>Índice de Satisfación general</h1>
                    <h3>Del 01 Dic. 2023 al 31 Dic. 2023</h3>
                </div>
                <div className="halfpie-charts-left-bottom">
                    <BigHalfpieChart />
                </div>
            </div>
            <div className="halfpie-charts-right">
                <div className="halfpie-charts-right-top">
                    <SmallHalfpieChart />
                    <SmallHalfpieChart />
                    <SmallHalfpieChart />
                </div>
                <div className="halfpie-charts-right-bottom">
                    <SmallHalfpieChart />
                    <SmallHalfpieChart />
                    <SmallHalfpieChart />

                </div>
            </div>

        </div>
    );
}


export default HalfPieCharts;