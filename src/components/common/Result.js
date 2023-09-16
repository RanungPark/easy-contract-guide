import React from 'react';
import { styled } from 'styled-components';
import Button from './Button';
import palette from '../../libs/styles/palette';

const ResultBlock = styled.div`
  position: relative;
  margin: 2rem 0.5rem;
  width: 80rem;
 
  @media (max-width: 1680px) {
   width: 100%;
   height: 50rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height:50rem;
  box-shadow: 0 0 8px rgba(0,0,0,0.025);
`

const Result = () => {
  return (
    <ResultBlock>
      <Wrapper>
        <Button fullWidth>
          결과보기
        </Button>
      </Wrapper>
    </ResultBlock >
  );
};

export default Result;