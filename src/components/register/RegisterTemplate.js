import React from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import Header from '../common/Header';
import MenuBlur from '../menu/MenuBlur';
import MenuTemplate from '../menu/MenuTemplate';
import RegisterForm from './RegisterForm';
import Blur from '../common/Blur';


const RegisterTemplateBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const RegisterFlex = styled.div`
  display: flex;
`

const RegisterTemplate = () => {
  const {register, contract} = useSelector(({file}) => ({
    register : file.register,
    contract : file.contract
  }))

  const {file} = register;
  const contractFile = contract.file

  return (
    <RegisterTemplateBlock>
      <Header />
      {
        contractFile === null && <Blur type={'standard'}/>
      }
      <RegisterFlex>
        {
          file === null && <MenuBlur props={'등기부등본 등록후 사용가능'}/> 
        }
        <MenuTemplate type='register'/>
        <RegisterForm />
      </RegisterFlex>
    </RegisterTemplateBlock >
  );
};

export default RegisterTemplate;