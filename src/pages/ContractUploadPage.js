import React from 'react';
import UploadTemplate from '../components/upload/UploadTemplate';
import ContractUploadForm from '../containers/ContractUploadForm';

const ContractUploadPage = () => {
  return (
    <UploadTemplate props={'임대차 계약서 업로드'}>
      <ContractUploadForm />
    </UploadTemplate>
  );
};

export default ContractUploadPage;