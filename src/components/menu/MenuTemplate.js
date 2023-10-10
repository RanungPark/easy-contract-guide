import React from 'react';
import { styled } from 'styled-components';
import palette from '../../libs/styles/palette';
import MenuStandard from './MenuStandard';
import MenuContract from './MenuContract';
import MenuStandardResult from './MenuStandardResult';
import MenuBuilding from './MenuBuilding';
import MenuBuildingResult from './MenuBuildingResult';
import MenuRegister from './MenuRegister';
import MenuRegisterResult from './MenuRegisterResult';

const MenuTemplateBlock = styled.div`
  height: 93vh;
  background: ${palette.gray[3]};
  display: flex;
  padding: 2rem;
  align-items: center;
  box-shadow: 0 0 8px rgba(0,0,0,0.025);
  flex-direction: column;
  padding-top: 1rem;
  overflow: scroll;


  &::-webkit-scrollbar {
    display:none;
  }

  & {
  -ms-overflow-style: none;
  scrollbar-width: none;
  }
`;

const MenuWrapper = styled.div`
  width:21vw;
`


const MenuTemplate = ({type}) => {
 
  return (
    <MenuTemplateBlock>
      {type === 'standard' && <>
        <MenuWrapper>
          <MenuStandard />
          <MenuContract />
          <MenuStandardResult />
        </MenuWrapper>
      </>}

      {
        type ==='building' && <>
          <MenuWrapper>
            <MenuContract />
            <MenuBuilding />
            <MenuBuildingResult />
          </MenuWrapper>
        </>}
      
      {
        type ==='register' && <>
          <MenuWrapper>
            <MenuContract />
            <MenuRegister />
            <MenuRegisterResult />
          </MenuWrapper>
        </>}
    </MenuTemplateBlock >
  );
};

export default MenuTemplate;