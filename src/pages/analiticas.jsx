import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Userbar from "../components/Userbar";
import Happycharts from "../components/Happycharts";
import Comparativa from "../components/comparativa";
import HalfPieCharts from "../components/HalfPieCharts";

const Analiticas = () => {

    return (
        <div >
          <Navbar />
          <Userbar />
          <Happycharts />
          <Comparativa />
         
         <HalfPieCharts />
        </div>
      );
      

}

export default Analiticas;