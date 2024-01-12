import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Userbar from "../components/Userbar";
import HappychartDashboard from "../components/HappychartDashboard";
import Calendario from "../components/Calendario";
import SimpleTable from "../components/SimpleTable";

const Dashboard = () => {
    const columns = [
        // Define las columnas de tu tabla
        { Header: 'Nombre', accessor: 'name' },
     
     
        { Header: 'Hora de fichaje', accessor: 'time' },
        { Header: 'Estado', accessor: 'status' },
      ];
    
    const data = [
        // Agrega tus datos aquí
        { name: "Aitor", time: "08:00", status: "On" },
        { name: "Maite", time: "09:30", status: "On" },
        { name: "Iñaki", time: "--:--", status: "Off" },
        { name: "Miren", time: "07:55", status: "On" },
        { name: "Eneko", time: "--:--", status: "Off" },
        /* 
        { name: "Ane", time: "08:30", status: "On" },
        { name: "Unai",  time: "--:--", status: "Off" },
        { name: "Oihane",  time: "08:15", status: "On" },
        { name: "Gorka",  time: "09:45", status: "On" },
        { name: "Amaia", surname: "Ortega", role: "Developer", time: "--:--", status: "Off" },
        { name: "Iker", surname: "García", role: "Manager", time: "07:45", status: "On" },
        { name: "Leire", surname: "Fernández", role: "Analyst", time: "--:--", status: "Off" },
        { name: "Xabier", surname: "Vega", role: "Developer", time: "09:15", status: "On" },
        { name: "Nerea", surname: "López", role: "Manager", time: "--:--", status: "Off" },
        { name: "Ekiñe", surname: "Soto", role: "HR Manager", time: "07:30", status: "On" },
         */
      ];

    return (
        <>
        <Navbar />
        <Userbar />
       < HappychartDashboard />
        <Calendario />
        <div className="table-resumen">
        <SimpleTable columns={columns} data={data} />
            </div>
    </>

    );

}

export default Dashboard;