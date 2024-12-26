import React from 'react';
// import Navbar from './Components/Navbar';
import './App.css';

import { Route, Routes } from 'react-router-dom'; 

import Navbar from './Components/Navbar';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar />} />
      </Routes>
    </>
  )
}

export default App
