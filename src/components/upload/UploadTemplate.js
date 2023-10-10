import React from 'react';
import { styled } from 'styled-components';

const UploadTemplateBlock = styled.div`
`;

const WhiteBox = styled.div`
  .type-area {
    display: block;
    padding-bottom: 0.5rem;
    padding-top: 1rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px rgba(0,0,0,0.025);
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 2px;
`

const UploadTemplate = ({children, props}) => {
  return (
    <UploadTemplateBlock>
      <WhiteBox>
        <div className='type-area'>
          {props}
        </div>
        {children}
      </WhiteBox>
    </UploadTemplateBlock >
  );
};

export default UploadTemplate;
