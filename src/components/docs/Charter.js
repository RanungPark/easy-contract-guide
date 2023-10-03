import React from 'react';
import { styled } from 'styled-components';
import palette from '../../libs/styles/palette';
import {GrCheckboxSelected} from 'react-icons/gr';
import { useSelector } from 'react-redux';

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
  const {type} = useSelector(({optionSecond}) => ({
    type: optionSecond.type,
  }))

  return (
    <CharterBlock>
      <div className='flexbox'>
        {
          type !== '' &&
          <div className='icon'>
            <GrCheckboxSelected />
          </div>
        }
        <div className='text'>
        {type}
        </div>
      </div>
    </CharterBlock >
  );
};

export default Charter;