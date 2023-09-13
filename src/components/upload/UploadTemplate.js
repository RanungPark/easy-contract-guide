import React from 'react';
import { styled } from 'styled-components';
import palette from '../../libs/styles/palette';
import { Link } from 'react-router-dom';
import { MdArrowBackIosNew } from 'react-icons/md';

const UploadTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${palette.gray[2]};
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
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

  .backPage {
    color: ${palette.gray[7]};

    &:hover {
      color: ${palette.gray[6]};
    }
  }
`

const UploadTemplate = ({children, props}) => {
  return (
    <UploadTemplateBlock>
      <WhiteBox>
      <Link to='/standard' className='backPage'><MdArrowBackIosNew /></Link>
        <div className='type-area'>
          {props}
        </div>
        {children}
      </WhiteBox>
    </UploadTemplateBlock >
  );
};

export default UploadTemplate;
