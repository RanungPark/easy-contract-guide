import React from 'react';
import { styled } from 'styled-components';

const DummyBlock = styled.div`
  margin: 2rem 0.5rem;
  width: 95rem;

  @media (max-width: 1680px) {
   width: 100%;
   height: 50rem;
  }
`;

const Dummy = () => {
  return (
    <DummyBlock />
  );
};

export default Dummy;