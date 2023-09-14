import React from 'react';
import { styled } from 'styled-components';
import zIndex from '../../libs/styles/z-indexes';
import Button from './Button';

const BlurBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  z-index: ${zIndex.blur};
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
`


const Blur = ({type}) => {
  return (
    <BlurBlock>
      <ErrorBox>
        {
          type === 'standard' ?
          <>
            <div className='error-massage'>임대차 계약서 등록 후 이용해주세요</div>
            <Button to="/upload/contract">임대차 계약 추가</Button>
          </> : (
            type === 'building' ?
            <>
              <div className='error-massage'>건축물 대장을 등록 후 이용해주세요</div>
              <Button to="/upload/building">건축물 대장 추가</Button>
            </> : (
              type === 'register' ?
              <>
                <div className='error-massage'>등기부 등본을 등록 후 이용해주세요</div>
                <Button to="/upload/register">등기부 등본 추가</Button>
              </> : <> </>
            )
          )
        }
      </ErrorBox>
    </BlurBlock >
  );
};

export default Blur;

  