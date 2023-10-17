import React from 'react';
import { styled } from 'styled-components';
import Header from '../common/Header';
import MenuTemplate from '../menu/MenuTemplate';
import StandardForm from './StandardForm';
import { useSelector } from 'react-redux';
import MenuBlur from '../menu/MenuBlur';
import Blur from '../common/Blur';

const StandardTemplateBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const StandardFlex = styled.div`
  display: flex;
`

const StandardTemplate = () => {
  const {contract, user} = useSelector(({file, user}) => ({
    contract : file.contract,
    user: user.user
  }))

  const {file} = contract;

  return (
    <StandardTemplateBlock>
      <Header />
      {
        user === null && <Blur />
      }
      <StandardFlex>
        {
          file === null && <MenuBlur props={'임대차계약서 등록후 사용가능'} type={'nomal'}/> 
        }
        <MenuTemplate type='standard'/>
        <StandardForm />
      </StandardFlex>
    </StandardTemplateBlock >
  );
};

export default StandardTemplate;