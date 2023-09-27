import React from 'react';
import { styled } from 'styled-components';
import palette from '../../libs/styles/palette';

const PaymentBlock = styled.div`
  margin-left: 4rem;
  margin-right: 4rem;
  margin-top:0.5rem;
`;

const PaymentTableHeader = styled.div`
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

const PaymentTableBody = styled.div`
  display: flex;
  margin-top:0;
`
const PaymentTableBodyLeft = styled.div`
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
const PaymentTableBodyRight = styled.div`
  display:flex;
  justify-content: space-between;
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

  span {
    font-size: 0.75rem;
  }
`


const Payment = () => {
  return (
    <PaymentBlock>
      <PaymentTableHeader>
        <div>
          2. 계약내용
        </div>
      </PaymentTableHeader>
      <PaymentTableBody>
        <PaymentTableBodyLeft>
          <div>보 증  금</div>
        </PaymentTableBodyLeft>
        <PaymentTableBodyRight>
          <div>금</div>
          <div>원정 (₩                         )</div>
        </PaymentTableBodyRight>
      </PaymentTableBody>
      <PaymentTableBody>
        <PaymentTableBodyLeft>
          <div>계 약  금</div>
        </PaymentTableBodyLeft>
        <PaymentTableBodyRight>
          <div>금</div>
          <div>
            <span>원정은 계약시에 지급하고 영수함</span>, 영수자(                 <span>(인)</span>)
          </div>
        </PaymentTableBodyRight>
      </PaymentTableBody>
      <PaymentTableBody>
        <PaymentTableBodyLeft>
          <div>중 도  금</div>
        </PaymentTableBodyLeft>
        <PaymentTableBodyRight>
          <div>금</div>
          <div>원정은     년      월      일에지급하며</div>
        </PaymentTableBodyRight>
      </PaymentTableBody>
      <PaymentTableBody>
        <PaymentTableBodyLeft>
          <div>잔       금</div>
        </PaymentTableBodyLeft>
        <PaymentTableBodyRight>
          <div>금</div>
          <div>원정은     년      월      일에지급한다</div>
        </PaymentTableBodyRight>
      </PaymentTableBody>
      <PaymentTableBody>
        <PaymentTableBodyLeft>
          <div>차       임</div>
        </PaymentTableBodyLeft>
        <PaymentTableBodyRight>
          <div>금</div>
          <div>원정은 (선불로⋅후불로) 매월      일에지급한다</div>
        </PaymentTableBodyRight>
      </PaymentTableBody>
    </PaymentBlock >
  );
};

export default Payment;