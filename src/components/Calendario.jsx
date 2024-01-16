import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calendario = () => {
  const [date, setDate] = useState(new Date());
  const [showAgenda, setShowAgenda] = useState(false);

  const onChange = (selectedDate) => {
    setDate(selectedDate);
    // Puedes mostrar la agenda al cambiar la fecha
    setShowAgenda(true);
  };

  const closeAgenda = () => {
    setShowAgenda(false);
  };

  // useEffect para mostrar la agenda al cargar la página
  useEffect(() => {
    setShowAgenda(true);
  }, []);

  return (
    <div className="calendar">
      <h2>Mi Calendario</h2>
      <Calendar onChange={onChange} value={date} />
      
      {showAgenda && (
        <div className="agenda">
          <h3>Agenda del día {date.toLocaleDateString()}</h3>
          <div className='agenda-container'>
            <div className='agenda-item'>
              <h4>10:00</h4>
              <div className='agenda-item-text'>
              <p className='agenda-item-text-title'>Reunión con el equipo</p>
              <p className='agenda-item-text-content'>Revision de Tareas</p>
              </div>
            </div>
            <div className='agenda-item'>
              <h4>12:00</h4>
              <div className='agenda-item-text'>
              <p className='agenda-item-text-title'>Reunión con el cliente</p>
              <p className='agenda-item-text-content'>Revision de Contrato</p>
              </div>
            </div>
            <div className='agenda-item'>
              <h4>16:00</h4>
              <div className='agenda-item-text'>
              <p className='agenda-item-text-title'>Reunión con el equipo</p>
              <p className='agenda-item-text-content'>Revision de Tareas</p>
              </div>
            </div>
            <div className='agenda-item'>
                <h4>18:00</h4>
                <div className='agenda-item-text'>
              <p className='agenda-item-text-title'>Reunión con el cliente</p>
              <p className='agenda-item-text-content'>Revision de Contrato</p>
              </div>
                </div>
                <div className='agenda-item'>
                <h4>20:00</h4>
                <div className='agenda-item-text'>
              <p className='agenda-item-text-title'>Reunión con el cliente</p>
              <p className='agenda-item-text-content'>Revision de Contrato</p>
              </div>
                </div>
              
          </div>
          {/* <button onClick={closeAgenda}>Cerrar Agenda</button> */}
        </div>
      )}
    </div>
  );
};

export default Calendario;
