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
  height: 93vh;
  width: 100%;
  background: ${palette.gray[1]};
`;

const Wrapper = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 1680px;
  margin: 0 auto;
  display: flex;
  height: 92vh;
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
          <FileViewTemplate props={'표준계약서'}>
            <StandardFileForm />
          </FileViewTemplate>
          <FileViewTemplate props={'나의 계약서'}>
            <Dummy imageUrls={[`https://weaver-contractproject-159651426016-ap-northeast-2.s3.ap-northeast-2.amazonaws.com/897d7f77-0739-4bc8-9ffe-bc6f38c0b673_KakaoTalk_20230921_165510932_02%20%282%29.pdf-3.png`]}/>
          </FileViewTemplate>
          <AnalyzeTemplate props={'표준계약서와 비교 결과'}>
            <ContractResultForm />
          </AnalyzeTemplate>
        </> 
        : 
        <>
          <FileViewTemplate props={'표준계약서'}>
            <StandardFileForm />
          </FileViewTemplate>
          <FileViewTemplate props={'나의 계약서'}>
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