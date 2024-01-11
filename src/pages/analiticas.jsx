import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Userbar from "../components/Userbar";
import Happycharts from "../components/Happycharts";
import Comparativa from "../components/comparativa";
import GraficaFoto from "../components/GraficaFoto";

const Analiticas = () => {

    return (
        <div >
          <Navbar />
          <Userbar />
          <Happycharts />
          <Comparativa />
          <GraficaFoto />
        </div>
      );
      

}

export default Analiticas;