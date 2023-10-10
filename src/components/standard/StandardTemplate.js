import React from 'react';
import { styled } from 'styled-components';
import Header from '../common/Header';
import MenuTemplate from '../menu/MenuTemplate';
import StandardForm from './StandardForm';
import { useSelector } from 'react-redux';
import MenuBlur from '../menu/MenuBlur';

const StandardTemplateBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const StandardFlex = styled.div`
  display: flex;
`

const StandardTemplate = () => {
  const {contract} = useSelector(({file}) => ({
    contract : file.contract,
  }))

  const contractFile = contract.file;

  return (
    <StandardTemplateBlock>
      <Header />
      <StandardFlex>
        {
          contractFile === null && <MenuBlur props={'임대차계약서 등록후 사용가능'}/> 
        }
        <MenuTemplate type='standard'/>
        <StandardForm />
      </StandardFlex>
    </StandardTemplateBlock >
  );
};

export default StandardTemplate;