import React from 'react';
import UploadTemplate from '../upload/UploadTemplate';
import BuildingUploadForm from '../../containers/BuildingUploadForm';
import { useSelector } from 'react-redux';
import Blur from '../common/Blur';

const BuildingUploadView = () => {
  const {contract} = useSelector(({file}) => ({
    contract: file.contract
  }))

  const {file} = contract


  return (
    <>
      {file === null ? <Blur type={'standard'}/> : <></>}
      <UploadTemplate props={'건축물 대장 업로드'}>
      <BuildingUploadForm />
      </UploadTemplate>
    </>
  );
};

export default BuildingUploadView;