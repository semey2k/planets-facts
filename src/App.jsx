import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Mercury from './page/Mercury';
function App() {
  return (
    <Routes>
      <Route path='/planets-facts' element={<Mercury home={0}/>}/>
      <Route path='/planets-facts/:id' element={<Mercury/>}/>
    </Routes>
  );
}

export default App;
