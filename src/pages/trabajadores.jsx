import React, { useEffect, useState } from 'react';
import PaginatedTable from './../components/PaginatedTable';
import Navbar from './../components/Navbar';
import Userbar from './../components/Userbar';
import { fetchAllUsersData } from './../js/fetch.js';

const Trabajadores = () => {
const [userData, setUserData] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchUserData = async () => {
    try {
      const { response, data } = await fetchAllUsersData();

      if (response.status === 200) {
        setUserData(data);
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
    { Header: 'Nombre', accessor: 'name' },
    { Header: 'Apellidos', accessor: 'surname' },
    { Header: 'Rol', accessor: 'rol' },
    { Header: 'Departamento', accessor: 'department' },
    { Header: 'Educación', accessor: 'education' },
    { Header: 'Salario', accessor: 'salary' },
    { Header: 'Tipo de Usuario', accessor: 'userType' }
   
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
      {loading ? (
        
        <p>Cargando datos...</p>
      ) : (
        
        <PaginatedTable columns={columns} data={userData} typeData={"Empleado"}/>
      )}
    </div>
  );
};


export default Trabajadores;