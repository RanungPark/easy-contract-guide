import React from 'react';
import UploadTemplate from '../components/upload/UploadTemplate';
import BuildingUploadForm from '../containers/BuildingUploadForm';

const BuildingUploadPage = () => {
  return (
    <UploadTemplate props={'건축물 대장 업로드'}>
      <BuildingUploadForm />
    </UploadTemplate>
  );
};

export default BuildingUploadPage;