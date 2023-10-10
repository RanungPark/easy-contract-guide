import React from 'react';
import { styled } from 'styled-components';

const MenuBlurBlock = styled.div`
  position: absolute;
  height: 93vh;
  z-index: 100;
  background-color: rgba(0,0,0,0.3);
  width:23.7vw;
  display: flex;
  justify-content: center;
  align-items: center;

  div{
    font-size: 1rem;
    opacity: 0.3;
  }
`;

const MenuBlur = ({props}) => {
  return (
    <MenuBlurBlock>
      <div>
        {props}
      </div>
    </MenuBlurBlock >
  );
};

export default MenuBlur;