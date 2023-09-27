import React from 'react';
import { styled } from 'styled-components';
import palette from '../../libs/styles/palette';
import {GrCheckboxSelected} from 'react-icons/gr';

const CharterBlock = styled.div`
  margin-top: 2rem;
  margin-left: 4rem;
  margin-right: 4rem;
  font-size : 1.3rem;
  font-weight: bold;
  color: ${palette.gray[7]};

  .flexbox {
    display: flex;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .text {
    margin-left: 0.5rem;
  }
`;

const Charter = () => {
  const payment = '전세'
  return (
    <CharterBlock>
       {
        payment === '전세' ? 
        <>
          <div className='flexbox'>
            <div className='icon'>
              <GrCheckboxSelected />
            </div>
            <div className='text'>
              전세
            </div>
          </div>
        </> : <>
          <div className='flexbox'>
            <div className='icon'>
              <GrCheckboxSelected />
            </div>
            <div className='text'>
              월세 및 반전세
            </div>
          </div>
        </>
      }
    </CharterBlock >
  );
};

export default Charter;