import React from 'react';
import { styled } from 'styled-components';

const AnalyzeTemplateBlock = styled.div`
  position: relative;
  margin: 2rem 0.5rem;
  width: 100rem;
  box-shadow: 0 0 8px rgba(0,0,0,0.025);
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  height:50rem; 
 
  @media (max-width: 1680px) {
   width: 100%;
   height: 50rem;
  }
`;

const WhiteBox = styled.div`
  .type-area {
    display: block;
    padding-bottom: 0.5rem;
    padding-top: 1rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1.2rem
  }
  box-shadow: 0 0 8px rgba(0,0,0,0.025);
  padding: 2rem;
  border-radius: 2px;
`

const ResultWrapper = styled.div`
  margin-top: 2rem;
`

const AnalyzeTemplate = ({children, props}) => {
  return (
    <AnalyzeTemplateBlock>
      <WhiteBox>
           <div  className='type-area'>
            {props}
          </div>
        <ResultWrapper>
          {children}
        </ResultWrapper> 
      </WhiteBox>
    </AnalyzeTemplateBlock >
  );
};

export default AnalyzeTemplate;