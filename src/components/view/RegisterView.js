import React from 'react';
import { useSelector } from 'react-redux';
import Blur from '../common/Blur';
import Header from '../common/Header';
import RegisterMain from '../Main/RegisterMain';

const RegisterView = () => {
  const {register} = useSelector(({file}) => ({
    register: file.register
  }))

  const {file} = register

  return (
    <>
      {file === null ? <Blur type={'register'}/> : <></>}
      <Header />
      <RegisterMain />
    </>
  );
};

export default RegisterView;