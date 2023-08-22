import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ContractListPage from './pages/ContractListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import BuildingUploadPage from './pages/BuildingUploadPage';
import RegisterUploadPage from './pages/RegisterUploadPage';
import ContractUploadPage from './pages/ContractUploadPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<ContractListPage />}/>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/register' element={<RegisterPage />}/>
      <Route path='/upload/building' element={<BuildingUploadPage />} />
      <Route path='/upload/register' element={<RegisterUploadPage />} />
      <Route path='/upload/contract' element={<ContractUploadPage />} />
    </Routes>
  );
};

export default App;