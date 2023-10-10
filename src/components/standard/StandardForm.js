import React from 'react';
import { styled } from 'styled-components';
import palette from '../../libs/styles/palette';
import UploadTemplate from '../upload/UploadTemplate';
import ContractUploadForm from '../../containers/ContractUploadForm';
import { useSelector } from 'react-redux';
import StandardView from './StandardView';

const StandardFormBlock = styled.div`
  width: 79vw;
  background: ${palette.gray[4]};
  height: 93vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StandardForm = () => {
  const {contract} = useSelector(({file}) => ({
    contract : file.contract,
  }))

  const {file} = contract;

  return (
    <StandardFormBlock>
      {
        file === null  ? <>
          <UploadTemplate  props={'임대차계약서 업로드'}>
            <ContractUploadForm />
          </UploadTemplate>
        </> : <StandardView /> 
      }
    </StandardFormBlock >
  );
};

export default StandardForm;