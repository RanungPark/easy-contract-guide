import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import BuildingUploadPage from './pages/BuildingUploadPage';
import RegisterUploadPage from './pages/RegisterUploadPage';
import ContractUploadPage from './pages/ContractUploadPage';
import TestPage from './test/pages/TestPage';
import StandardViewPage from './pages/StandardViewPage';
import GuidePage from './pages/GuidePage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/standard' element={<StandardViewPage />} />
      <Route path='/upload/building' element={<BuildingUploadPage />} />
      <Route path='/upload/register' element={<RegisterUploadPage />} />
      <Route path='/upload/contract' element={<ContractUploadPage />} />
      <Route path='/test' element={<TestPage />} />
      <Route path='/guide' element={<GuidePage />} />
    </Routes>
  );
};

export default App;