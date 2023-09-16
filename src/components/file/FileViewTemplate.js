import React from 'react';
import { styled } from 'styled-components';

const FileViewTemplateBlock = styled.div`
  margin: 2rem 0.5rem;
  box-shadow: 0 0 8px rgba(0,0,0,0.025);
`;

const FileViewTemplate = ({children}) => {
  return (
    <FileViewTemplateBlock>
      {children}
    </FileViewTemplateBlock >
  );
};

export default FileViewTemplate;