import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TestPage from './test/pages/TestPage';
import StandardViewPage from './pages/StandardViewPage';
import BuildingViewPage from './pages/BuildingViewPage';
import RegisterViewPage from './pages/RegisterViewPage';
import DousPage from './pages/DousPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/signup' element={<RegisterPage />} />
      <Route path='/standard' element={<StandardViewPage />} />
      <Route path='/building' element={<BuildingViewPage />} />
      <Route path='/register' element={<RegisterViewPage />} />
      <Route path='/dous' element={<DousPage />} />
      <Route path='/test' element={<TestPage />} />
    </Routes>
  );
};

export default App;