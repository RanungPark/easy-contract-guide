import React from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import Header from '../common/Header';
import MenuBlur from '../menu/MenuBlur';
import BuildingForm from './BuildingForm';
import MenuTemplate from '../menu/MenuTemplate';
import Blur from '../common/Blur';

const BuildingTemplateBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const BuildingFlex = styled.div`
display: flex;
`

const BuildingTemplate = () => {
  const {building, contract, contractResult} = useSelector(({file,result}) => ({
    building : file.building,
    contract : file.contract,
    contractResult: result.contractResult,
  }))

  const {file} = building;
  const contractFile = contract.file;
  const {result} = contractResult;

  return (
    <BuildingTemplateBlock>
      <Header />
      {
        contractFile === null && <Blur type={'standard'}/>
      }
      <BuildingFlex>
        {
          file === null ? <MenuBlur props={'건축물대장 등록후 사용가능'} type={'nomal'}/>  : (
            result === null ? <MenuBlur type={'result'} /> : <></>
          )
        }
        <MenuTemplate type='building'/>
        <BuildingForm/>
      </BuildingFlex>
    </BuildingTemplateBlock >
  );
};

export default BuildingTemplate;