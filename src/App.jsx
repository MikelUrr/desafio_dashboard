import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/login';
import Userbar from './components/Userbar';
import Dashboard from './pages/Dashboard';
import Analiticas from './pages/analiticas';
import Comparativa from './components/comparativa';
import Personas from './pages/personas';
import HalfPieCharts from './components/HalfPieCharts';
import BarChartHorizontal from './components/BarChartHorizontal';
import Trabajadores from './pages/trabajadores';

function App() {
  

  return (
    <div className='App'>
    <Router>
    <div>
      
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/analiticas' element={<Analiticas />} />
        <Route path='/personas' element={<Personas />} /> 
        <Route path='/trabajadores' element={<Trabajadores />} /> 
        <Route path='/prueba' element={<BarChartHorizontal />} /> 
        <Route path='/a' element={<HalfPieCharts />} /> 
        <Route path='*' element={<div>404 Not found</div>}></Route>
      </Routes>
    </div>

    </Router>
    
    </div>
  );
}

export default App
