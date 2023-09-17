import React from 'react';
import { styled } from 'styled-components';
import palette from '../../libs/styles/palette';

const FileViewTemplateBlock = styled.div`
  margin: 2rem 0.5rem;
  box-shadow: 0 0 8px rgba(0,0,0,0.025);
`;

const Wrapper = styled.div`
  .type-area {
    display: block;
    padding-bottom: 0.5rem;
    padding-top: 1rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1.2rem;
    color: ${palette.gray[7]};
  }
  box-shadow: 0 0 8px rgba(0,0,0,0.025);
  padding: 2rem;
  border-radius: 2px;
`

const FileViewTemplate = ({children, props}) => {
  return (
    <FileViewTemplateBlock>
      <Wrapper>
        <div  className='type-area'>
          {props}
        </div>
        {children}
      </Wrapper>
    </FileViewTemplateBlock >
  );
};

export default FileViewTemplate;