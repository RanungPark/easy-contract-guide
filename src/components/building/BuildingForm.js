import React from 'react';
import { styled } from 'styled-components';
import palette from '../../libs/styles/palette';
import { useSelector } from 'react-redux';
import UploadTemplate from '../upload/UploadTemplate';
import BuildingUploadForm from '../../containers/BuildingUploadForm';
import BuildingView from './BuildingView';

const BuildingFormBlock = styled.div`
  width: 79vw;
  background: ${palette.gray[4]};
  height: 93vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BuildingForm = () => {
  const {building} = useSelector(({file}) => ({
    building : file.building,
  }))

  const {file} = building;

  return (
    <BuildingFormBlock>
      {
        file === null  ? <>
          <UploadTemplate  props={'건축물대장 업로드'}>
            <BuildingUploadForm />
          </UploadTemplate>
        </> : <BuildingView /> 
      }
    </BuildingFormBlock >
  );
};

export default BuildingForm;