import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/login';
import Userbar from './components/Userbar';
import Dashboard from './pages/Dashboard';
function App() {
  

  return (
    <div className='App'>
    <Router>
    <div>
      
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />} />
        {/* <Route path='/menu' element={<Menu />} />
        <Route path='/stats' element={<Stats />} />  */}
        <Route path='*' element={<div>404 Not found</div>}></Route>
      </Routes>
    </div>

    </Router>
    
    </div>
  );
}

export default App
