import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Mercury from './page/Mercury';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Mercury home={0}/>}/>
      <Route path='/:id' element={<Mercury/>}/>
    </Routes>
  );
}

export default App;
