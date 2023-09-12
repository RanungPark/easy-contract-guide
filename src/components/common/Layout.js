import React from 'react';
import { styled } from 'styled-components';

const LayoutBlock = styled.div`
  display:flex;
  flex-direction: column;
`;

const Layout = ({children}) => {
  return (
    <LayoutBlock>
      {children}
    </LayoutBlock >
  );
};

export default Layout;