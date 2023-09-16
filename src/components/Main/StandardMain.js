import React from 'react';
import { styled } from 'styled-components';
import Dummy from '../common/Dummy';
import FileViewTemplate from '../file/FileViewTemplate';
import { useSelector } from 'react-redux';
import palette from '../../libs/styles/palette';
import StandardFileForm from '../../containers/StandardFileForm';
import ContractFileForm from '../../containers/ContractFileForm';
import AnalyzeTemplate from '../common/Analyze';
import ContractResultForm from '../../containers/ContractResultForm';

const StandardMainBlock = styled.div`
  height: 100%;
  width: 100%;
  background: ${palette.gray[1]};
`;

const Wrapper = styled.div`
 padding-left: 1rem;
  padding-right: 1rem;
  width: 1680px;
  margin: 0 auto;
  display: flex;

  @media (max-width: 1680px) {
    width: 1024px;
    flex-direction: column;
  }
  
  @media (max-width: 1024px) {
    width: 768px;
  }

  @media (max-width: 768px) {
    width: 100%
  }
`;

const StandardMain = () => {
  const {contract} = useSelector(({file}) => ({
    contract: file.contract
  }))

  const {file} = contract

  return (
    <StandardMainBlock>
      <Wrapper>
      {file === null ? 
        <>
          <Dummy />
          <FileViewTemplate>
            <StandardFileForm />
          </FileViewTemplate>
          <Dummy />
        </> 
        : 
        <>
          <FileViewTemplate>
            <StandardFileForm />
          </FileViewTemplate>
          <FileViewTemplate>
            <ContractFileForm />
          </FileViewTemplate>
          <AnalyzeTemplate props={'표준계약서와 비교 결과'}>
            <ContractResultForm />
          </AnalyzeTemplate>
        </>
      }
      </Wrapper>
    </StandardMainBlock >
  );
};

export default StandardMain;