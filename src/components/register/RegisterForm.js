import React from 'react';
import { styled } from 'styled-components';
import palette from '../../libs/styles/palette';
import { useSelector } from 'react-redux';
import RegisterUploadForm from '../../containers/RegisterUploadForm';
import UploadTemplate from '../upload/UploadTemplate';
import RegisterView from './RegisterView';

const RegisterFormBlock = styled.div`
  width: 79vw;
  background: ${palette.gray[4]};
  height: 93vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RegisterForm = () => {
  const {register} = useSelector(({file}) => ({
    register : file.register,
  }))

  const {file} = register;


  return (
    <RegisterFormBlock>
      {
        file === null  ? <>
          <UploadTemplate  props={'등기부등본 업로드'}>
            <RegisterUploadForm />
          </UploadTemplate>
        </> : <RegisterView /> 
      }
    </RegisterFormBlock >
  );
};

export default RegisterForm;