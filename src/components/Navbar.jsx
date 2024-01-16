import React from "react";
import { useState, useEffect } from "react";
import "./components.css";
import { logoutApi } from "./../js/fetch.js";
import { useNavigate, useLocation } from "react-router-dom";
const Navbar = () => {
  const menuItems = [
    { icon: 'dashboard.svg', name: 'Inicio', path: '/dashboard' },
    { icon: 'departamentos.svg', name: 'Asistencia' , path: '/personas' },
    { icon: 'personal.svg', name: 'Emoción Index', path: '/analiticas' },
    { icon: 'asistencia.svg', name: 'Emoción Completa', path: '/emociones'  },
    { icon: 'asistencia.svg', name: 'Personal', path: '/trabajadores'  },
    
  ];
  const [activeItem, setActiveItem] = useState(0);


  const navigate = useNavigate();
  const location = useLocation();
  const handleLogout = async () => {
    const response = await logoutApi();
    if (response) {
      navigate("/");
    }
  }

  const handleItemClick = (index, path) => {
    console.log(path);
    navigate(path);
  };


  useEffect(() => {
    // Encuentra el índice del elemento del menú correspondiente a la ruta actual
    const index = menuItems.findIndex(item => item.path === location.pathname);
    if (index !== -1) {
      setActiveItem(index);
    }
  }, [location.pathname, menuItems]);
  return (
    <div className="navbarizq">
      <div className="logo">
        <img src="/logonavbar.svg" alt="logo" />
      </div>
      <div className="menus">
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`navbar-item ${activeItem === index ? 'active' : ''}`}
              onClick={() => handleItemClick(index, item.path)}
              value={item.name}
            >
              <img src={'/' + item.icon} alt={item.name} />
              {item.name}
            </li>
          ))}
          <button className="logout-item" onClick={handleLogout}>
            <img src="/logout.svg" alt="logout" />
            Cerrar sesión
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;