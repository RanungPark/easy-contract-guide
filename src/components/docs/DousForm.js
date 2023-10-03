import React from 'react';
import { styled } from 'styled-components';
import palette from '../../libs/styles/palette';
import Information from './Information';
import Article from './Article';
import Charter from './Charter';
import RealEstate from './RealEstate';
import Payment from './Payment';
import Account from './Account';

const DousFormBlock = styled.div`
  width: 79vw;
  background: ${palette.gray[4]};
  height: 93vh;
  display: flex;
  justify-content: center;
  align-items: center;  
`;

const DousBox = styled.div`
  background: white;
  height: 88vh;
  width: 38vw;
  overflow: scroll;

  &::-webkit-scrollbar {
    display:none;
  }

  & {
  -ms-overflow-style: none;
  scrollbar-width: none;
  }
`

const Dous = styled.div`
  .headerWrapper {
    display: flex;
    justify-content:center;
    align-items: center;
    margin-top: 4rem;

    .header {
    letter-spacing: 1rem;
    font-weight: 800;
    font-size: 1.5rem;
    color: black;
    }
  }

  .footerWrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 4rem;
    margin-top: 2rem;

    .footer {
      font-size: 1.05rem;
      font-weight: bold;
      color: black;
    }
  }
`

const DousForm = () => {

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();

  return (
    <DousFormBlock>
      <DousBox>
        <Dous>
          <div className='headerWrapper'>
            <div className='header'>부동산임대차계약서</div>
          </div>
          <Charter />
          <RealEstate />
          <Payment />
          <Account />
          <Article />
          <div className='footerWrapper'>
            <div className='footer'>{year}년 {month}월 {date}일</div>
          </div>
          <Information />
        </Dous>
      </DousBox>
    </DousFormBlock >
  );
};

export default DousForm;