import React from 'react';
import { styled } from 'styled-components';

const MenuBlurBlock = styled.div`
  position: absolute;
  height: 93vh;
  z-index: 100;
  background-color:  rgba(0, 0, 0, 0.5);
  width:23.7vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ErrorBox = styled.div`
  .error-massage {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1rem;
  }
  box-shadow: 0 0 8px rgba(0,0,0,0.025);
  padding: 2rem;
  width: 360px;
  background: rgb(240,240,240);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0.7;
`


const MenuBlur = ({props}) => {
  return (
    <MenuBlurBlock>
      <ErrorBox>
        {props}
      </ErrorBox>
    </MenuBlurBlock >
  );
};

export default MenuBlur;