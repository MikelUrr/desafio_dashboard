import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Userbar from "../components/Userbar";
import HappychartDashboard from "../components/HappychartDashboard";
import Calendario from "../components/Calendario";
import SimpleTable from "../components/SimpleTable";
import ComparativaDash from "../components/ComparativaDash";
import { fetchTableData } from './../js/fetch.js';

const Dashboard = () => {
    const [userData, setUserData] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchUserData = async () => {
    try {
      const { response, data } = await fetchTableData();

      if (response.status === 200) {
        //sortdata by status first On and filter the first 5
        const sortedData = data.sort((a, b) => (a.status > b.status ? -1 : 1));
        //filter the first 5 records
        const filteredData = sortedData.filter((item, index) => index < 4); //ajusta aqui para cambiar longitud de la tabla
        setUserData(filteredData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // Marcar la carga como completa, independientemente de si fue exitosa o no
    }
  };

  fetchUserData();
}, []);

    const columns = [
        // Define las columnas de tu tabla
        { Header: 'Nombre', accessor: 'name' },
        { Header: 'Hora de fichaje', accessor: 'horaEntrada' },
        { Header: 'Estado', accessor: 'status' },
      ];
    
  /*   const data = [
        // Agrega tus datos aquí
        { name: "Aitor Ortega", time: "08:00", status: "On" },
        { name: "Maite Ortega", time: "09:30", status: "On" },
        { name: "Iñaki Ortega", time: "--:--", status: "Off" },
        { name: "Miren Ortega", time: "07:55", status: "On" },
        { name: "Eneko Ortega", time: "--:--", status: "Off" },
        
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
        
      ]; */
      return (
        <>
          {loading ? (
            <p>Cargando datos...</p>
          ) : (
            <div>
              <ComparativaDash />
              <Navbar />
              <Userbar />
              <HappychartDashboard />
              <Calendario />
              <SimpleTable columns={columns} data={userData} />
            </div>
          )}
        </>
      );
      
}

export default Dashboard;