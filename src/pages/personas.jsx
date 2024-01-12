import React, { useEffect, useState } from 'react';
import PaginatedTable from './../components/PaginatedTable';
import Navbar from './../components/Navbar';
import Userbar from './../components/Userbar';
import { fetchTableData } from './../js/fetch.js';

const Personas = () => {
const [userData, setUserData] = useState(null);

useEffect(() => {
    const fetchUserData = async () => {
        const {response,data} = await fetchTableData();

        if (response.status === 200) {
            setUserData(data);
        }
    }
    fetchUserData();
}, []);





  const columns = [
    // Define las columnas de tu tabla
    { Header: 'Nombre', accessor: 'name' },
    { Header: 'Apellidos', accessor: 'surname' },
    { Header: 'Rol', accessor: 'rol' },
    { Header: 'Hora de Entrada', accessor: 'horaEntrada' },
    { Header: 'Hora de Entrada', accessor: 'horaSalida' },
    { Header: 'Estado', accessor: 'status' },
  ];


/*   const data = [
    // Agrega tus datos aquí
    { name: "Aitor", surname: "Etxebarria", role: "Developer", time: "08:00", status: "On" },
    { name: "Maite", surname: "González", role: "Analyst", time: "09:30", status: "On" },
    { name: "Iñaki", surname: "López", role: "HR Manager", time: "--:--", status: "Off" },
    { name: "Miren", surname: "Martínez", role: "Manager", time: "07:55", status: "On" },
    { name: "Eneko", surname: "Santos", role: "Developer", time: "--:--", status: "Off" },
    { name: "Ane", surname: "Larrea", role: "Analyst", time: "08:30", status: "On" },
    { name: "Unai", surname: "Mendoza", role: "Developer", time: "--:--", status: "Off" },
    { name: "Oihane", surname: "Sánchez", role: "Manager", time: "08:15", status: "On" },
    { name: "Gorka", surname: "Iglesias", role: "HR Manager", time: "09:45", status: "On" },
    { name: "Amaia", surname: "Ortega", role: "Developer", time: "--:--", status: "Off" },
    { name: "Iker", surname: "García", role: "Manager", time: "07:45", status: "On" },
    { name: "Leire", surname: "Fernández", role: "Analyst", time: "--:--", status: "Off" },
    { name: "Xabier", surname: "Vega", role: "Developer", time: "09:15", status: "On" },
    { name: "Nerea", surname: "López", role: "Manager", time: "--:--", status: "Off" },
    { name: "Ekiñe", surname: "Soto", role: "HR Manager", time: "07:30", status: "On" },
    
  ]; */

  return (
    <div>
      <Navbar />
          <Userbar />
       <PaginatedTable columns={columns} data={userData} /> 
    </div>
  );
};

export default Personas;