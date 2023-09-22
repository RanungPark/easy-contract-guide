import React from 'react';
import { styled } from 'styled-components';
import palette from '../../libs/styles/palette';
import { useSelector } from 'react-redux';
import Dummy from '../common/Dummy';
import FileViewTemplate from '../file/FileViewTemplate';
import StandardFileForm from '../../containers/StandardFileForm';
import ContractFileForm from '../../containers/ContractFileForm';
import AnalyzeTemplate from '../common/Analyze';
import ContractResultForm from '../../containers/ContractResultForm';

const BuildingMainBlock = styled.div`
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


const BuildingMain = () => {
  const {building} = useSelector(({file}) => ({
    building: file.building
  }))

  const {file} = building

  return (
    <BuildingMainBlock>
      <Wrapper>
      {file === null ? 
        <>
          <FileViewTemplate props={'나의 계약서'}>
            <ContractFileForm />
          </FileViewTemplate>
          <FileViewTemplate props={'건축물대장'}>
            <Dummy imageUrls={[`https://weaver-contractproject-159651426016-ap-northeast-2.s3.ap-northeast-2.amazonaws.com/897d7f77-0739-4bc8-9ffe-bc6f38c0b673_KakaoTalk_20230921_165510932_02%20%282%29.pdf.png`]}/>
          </FileViewTemplate>
          <AnalyzeTemplate props={'건축물대장과 비교 결과'}>
            <ContractResultForm />
          </AnalyzeTemplate>
        </> 
        : 
        <>
          <FileViewTemplate props={'나의 계약서'}>
            <ContractFileForm />
          </FileViewTemplate>
          <FileViewTemplate props={'건축물대장'}>
            <StandardFileForm />
          </FileViewTemplate>
          <AnalyzeTemplate props={'건축물대장과 비교 결과'}>
            <ContractResultForm />
          </AnalyzeTemplate>
        </>
      }
      </Wrapper>
    </BuildingMainBlock >
  );
};

export default BuildingMain;