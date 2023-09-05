import React from 'react';
import UploadTemplate from '../components/upload/UploadTemplate';
import RegisterUploadForm from '../containers/RegisterUploadForm';

const RegisterUploadPage = () => {
  return (
    <UploadTemplate props={'등기부 등본 업로드'}>
      <RegisterUploadForm />
    </UploadTemplate>
  );
};

export default RegisterUploadPage;