import React from 'react';
import { useSelector } from 'react-redux';
import Blur from '../common/Blur';
import RegisterUploadForm from '../../containers/RegisterUploadForm';
import UploadTemplate from '../upload/UploadTemplate';

const RegisterUploadView = () => {
  const {contract} = useSelector(({file}) => ({
    contract: file.contract
  }))

  const {file} = contract

  return (
    <>
      {file === null ? <Blur type={'standard'}/> : <></>}
      <UploadTemplate props={'등기부 등본 업로드'}>
        <RegisterUploadForm />
      </UploadTemplate>
    </>
  );
};

export default RegisterUploadView;