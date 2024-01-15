import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Userbar from "../components/Userbar.jsx";

import BasicTable from './../components/BasicTable';

import { fetchComplexDataApi } from '../js/fetch.js';

const EmocionesComplejas = () => {
    const [userData, setUserData] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchComplexData = async () => {
    try {
      const { response, data } = await fetchComplexDataApi();

      if (response.status === 200) {
       
        setUserData(data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // Marcar la carga como completa, independientemente de si fue exitosa o no
    }
  };

  fetchComplexData();
}, []);

    const columns = [
        // Define las columnas de tu tabla
        { Header: 'Rank', accessor: 'Rank' },
        { Header: 'Emocion Compleja', accessor: 'Emocion Compleja' },
        { Header: 'Emocion Entrada', accessor: 'Emocion Entrada' },
        { Header: 'Votos ', accessor: 'Votos Entrada' },
        { Header: '% ', accessor: '% Entrada' },
        { Header: 'Emocion Salida', accessor: 'Emocion Salida' },
        { Header: '% ', accessor: '% Salida' },
        { Header: 'Votos ', accessor: 'Votos Salida' },
        { Header: 'Rendimiento', accessor: 'Rendimiento' },
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
          
              <Navbar />
              <Userbar />
             
              <BasicTable columns={columns} data={userData} />
            </div>
          )}
        </>
      );
      
}

export default EmocionesComplejas;