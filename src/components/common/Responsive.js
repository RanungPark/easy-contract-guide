import React from 'react';
import { styled } from 'styled-components';

const ResponsiveBlockMid = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 1024px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 768px;
  }

  @media (max-width: 768px) {
    width: 100%
  }
`;

const ResponsiveBlockBig = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 1680px;
  margin: 0 auto;

  @media (max-width: 1680px) {
    width: 1024px;
  }
  
  @media (max-width: 1024px) {
    width: 768px;
  }

  @media (max-width: 768px) {
    width: 100%
  }
`;

export const ResponsiveMid = ({children, ...rest}) => {
  return (
    <ResponsiveBlockMid {...rest}>
      {children}
    </ResponsiveBlockMid >
  );
};

export const ResponsiveBig = ({children, ...rest}) => {
  return (
    <ResponsiveBlockBig {...rest}>
      {children}
    </ResponsiveBlockBig >
  );
};