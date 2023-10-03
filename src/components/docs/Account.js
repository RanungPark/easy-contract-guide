import React from 'react';
import { styled } from 'styled-components';
import palette from '../../libs/styles/palette';
import { useSelector } from 'react-redux';

const AccountBlock = styled.div`
  margin-left: 4rem;
  margin-right: 4rem;
  margin-top:0.5rem;
`;

const AccountTableHeader = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.5rem;
  background: #8fc9f5;
  width: 100%;
  height:4vh;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  margin-bottom: 0;
`

const AccountTableBody = styled.div`
  display: flex;
  margin-top:0;
`

const AccountTableBodyLeft = styled.div`
  background: #3DA5F5;
  color: white;
  display:flex;
  justify-content: center;
  align-items: center;
  width: 6vw;
  height:4vh;
  white-space: pre-wrap;
  margin:0;
  font-weight: bold;
`

const AccountTableBodyRight = styled.div`
  display:flex;
  flex-direction: row-reverse;
  white-space: pre-wrap;
  margin:0;
  width: 100%;
  align-items:center;
  padding-left: 1rem;
  padding-right: 1rem;
  color: ${palette.gray[7]};
  border-bottom : 1px solid #3DA5F5;
  border-right : 1px solid #3DA5F5;
  font-weight: bold;
  font-size: 0.95rem;
`

const Account = () => {
  const {
    monthlyRent,
    paymentDate,
    bankName,
    accountNumber,
    accountHolder,
    } = useSelector(({optionSecond, optionThird}) => ({
        monthlyRent: optionSecond.monthlyRent,
        paymentDate: optionSecond.paymentDate,
        bankName: optionThird.bankName,
        accountNumber: optionThird.accountNumber,
        accountHolder: optionThird.accountHolder,
      }))
  
  return (
    <AccountBlock>
      { monthlyRent !== '' || 
        paymentDate !== '' || 
        bankName !== '' || 
        accountNumber !== '' || 
        accountHolder !== '' ? <>
        <AccountTableHeader>
          <div>
            3. 계약 조건 및 계좌 번호
          </div>
        </AccountTableHeader>
      </> : <></> }

      { monthlyRent !== '' ? <>
        <AccountTableBody>
          <AccountTableBodyLeft>
            <div>월 세 금 액</div>
          </AccountTableBodyLeft>
          <AccountTableBodyRight>
            {monthlyRent} 원
          </AccountTableBodyRight>
        </AccountTableBody>
      </> : <></>}

      { paymentDate !== '' ? <>
        <AccountTableBody>
          <AccountTableBodyLeft>
            <div>지 불 일</div>
          </AccountTableBodyLeft>
          <AccountTableBodyRight>
            {paymentDate} 일
          </AccountTableBodyRight>
        </AccountTableBody>
      </> : <></>}

      { bankName !== '' ? <>
        <AccountTableBody>
          <AccountTableBodyLeft>
            <div>은 행 명</div>
          </AccountTableBodyLeft>
          <AccountTableBodyRight>
            {bankName}
          </AccountTableBodyRight>
        </AccountTableBody>
      </> : <></>}

      { accountNumber !== '' ? <>
        <AccountTableBody>
          <AccountTableBodyLeft>
            <div>계 좌 번 호</div>
          </AccountTableBodyLeft>
          <AccountTableBodyRight>
            {accountNumber}
          </AccountTableBodyRight>
        </AccountTableBody>
      </> : <></>}

      { accountHolder !== '' ? <>
        <AccountTableBody>
          <AccountTableBodyLeft>
            <div>예 금 주</div>
          </AccountTableBodyLeft>
          <AccountTableBodyRight>
            {accountHolder}
          </AccountTableBodyRight>
        </AccountTableBody>
      </> : <></>}

    </AccountBlock >
  );
};

export default Account;