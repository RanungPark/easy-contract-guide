import React from 'react';
import { styled } from 'styled-components';
import Header from '../common/Header';
import OptionTemplate from '../options/OptionTemplate';
import DousForm from './DousForm';

const DousTemplateBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const DousFlex = styled.div`
  display: flex;
`

const DousTemplate = () => {
  return (
    <DousTemplateBlock>
      <Header />
      <DousFlex>
        <OptionTemplate />
        <DousForm />
      </DousFlex>
    </DousTemplateBlock >
  );
};

export default DousTemplate;