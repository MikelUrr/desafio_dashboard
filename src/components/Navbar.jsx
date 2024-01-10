import React from "react";
import { useState } from "react";
import "./components.css";
const Navbar = () => {
    const menuItems = [
        { icon: 'dashboard.svg', name: 'Dashboard' },
        { icon: 'personal.svg', name: 'Personal' },
        { icon: 'departamentos.svg', name: 'Departamentos' },
        { icon: 'asistencia.svg', name: 'Asistencia' },
        { icon: 'vacaciones.svg', name: 'Vacaciones' },
        { icon: 'jobs.svg', name: 'Jobs' },
        { icon: 'candidates.svg', name: 'Candidates' },
      ];
      const [activeItem, setActiveItem] = useState(null);

      const handleItemClick = (index) => {
        setActiveItem(index);
      };   

      return (
        <div className="navbar">
          <div className="logo">
            <img src="/logonavbar.svg" alt="logo" />
          </div>
          <div className="menu">
            <ul>
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`navbar-item ${activeItem === index ? 'active' : ''}`}
                  onClick={() => handleItemClick(index)}
                >
                  <img src={'/' + item.icon} alt={item.name} />
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    };
export default Navbar;