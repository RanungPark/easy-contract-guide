import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import BuildingUploadPage from './pages/BuildingUploadPage';
import RegisterUploadPage from './pages/RegisterUploadPage';
import ContractUploadPage from './pages/ContractUploadPage';
import TestPage from './test/pages/TestPage';
import StandardPage from './pages/StandardPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/standard' element={<StandardPage />} />
      <Route path='/upload/building' element={<BuildingUploadPage />} />
      <Route path='/upload/register' element={<RegisterUploadPage />} />
      <Route path='/upload/contract' element={<ContractUploadPage />} />
      <Route path='/test' element={<TestPage />} />
    </Routes>
  );
};

export default App;