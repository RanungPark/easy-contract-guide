import React from 'react';
import { styled } from 'styled-components';
import palette from '../../libs/styles/palette';
import { useSelector } from 'react-redux';

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
  min-height:4vh;
  white-space: pre-wrap;
  margin:0;
  font-weight: bold;
`
const PaymentTableBodyRight = styled.div`
  display:flex;
  white-space: pre-wrap;
  margin:0;
  width: 100%;
  align-items:center;
  padding-right: 1rem;
  color: ${palette.gray[7]};
  border-bottom : 1px solid #3DA5F5;
  border-right : 1px solid #3DA5F5;
  font-weight: bold;
  font-size: 0.95rem;
  min-height:4vh;

  span {
    font-size: 0.75rem;
  }
`

const Bodyleft = styled.div`
  width: 30%;
  display: flex;
  word-break:break-all;
  padding-right: 1rem;
  height: 100%;
  
  div {
    display: flex;
    align-items: center;
    padding-left: 1rem;
  }
`

const BodyRight = styled.div`
  width: 70%;
  display: flex; 
  word-break:break-all;
  height: 100%;
  
  div {
    display: flex;
    align-items: center;
  }

  .fontChange {
    font-size: 0.9rem;
  }
`


const Payment = () => {
  const {
    subsidy,
    downPayment,
    payer,
    middlePayment,
    middlePaymentDay,
    balance,
    balancePaymentDay,
    paid,
    charge,
    chargePaymentDate,
    } = useSelector(({optionThird}) => ({
        subsidy: optionThird.subsidy,
        downPayment: optionThird.downPayment,
        payer: optionThird.payer,
        middlePayment: optionThird.middlePayment,
        middlePaymentDay: optionThird.middlePaymentDay,
        balance: optionThird.balance,
        balancePaymentDay: optionThird.balancePaymentDay,
        paid: optionThird.paid,
        charge: optionThird.charge,
        chargePaymentDate: optionThird.chargePaymentDate,
      }))

  return (
    <PaymentBlock>
    
      { subsidy !== '' ||
        downPayment !== '' ||
        payer !== '' ||
        middlePayment !== '' ||
        middlePaymentDay !== '' ||
        balance !== '' ||
        balancePaymentDay !== '' ||
        paid !== '' ||
        charge !== '' ||
        chargePaymentDate !== '' ? <>  
        <PaymentTableHeader>
          <div>
            2. 계약내용
          </div>
        </PaymentTableHeader>
      </> : <></>}

      { subsidy !== '' ? <>
        <PaymentTableBody>
          <PaymentTableBodyLeft>
            <div>보 증  금</div>
          </PaymentTableBodyLeft>
          <PaymentTableBodyRight>
            <Bodyleft>
              <div>금</div>
            </Bodyleft>
            <BodyRight>
              <div>원정 (     ₩{subsidy}      )원</div>
            </BodyRight>
          </PaymentTableBodyRight>
        </PaymentTableBody>
      </> : <></>}
    
      { downPayment !== '' || payer !== '' ? <> 
        <PaymentTableBody>
          <PaymentTableBodyLeft>
            <div>계 약  금</div>
          </PaymentTableBodyLeft>
          <PaymentTableBodyRight>
            <Bodyleft>
              <div>금</div>
              <div>
                {downPayment}원
              </div>
            </Bodyleft>
            <BodyRight>
              <div className='fontChange'>
                <span>원정은 계약시에 지급하고 영수함</span>, 영수자(   <>{payer}</>   <span>(인)</span>)
              </div>
            </BodyRight>
          </PaymentTableBodyRight>
        </PaymentTableBody>
      </> : <></>}

      { middlePayment !== '' || middlePaymentDay !== '' ? <>
        <PaymentTableBody>
          <PaymentTableBodyLeft>
            <div>중 도  금</div>
          </PaymentTableBodyLeft>
          <PaymentTableBodyRight>
            <Bodyleft>
              <div>금</div>
              <div>
                {middlePayment}원
              </div>
            </Bodyleft>
            <BodyRight>
              <div>
                원정은
                {middlePaymentDay !== '' ? <>{middlePaymentDay}</> : <>   년    월    일</>}
                에지급하며
              </div>
            </BodyRight>
          </PaymentTableBodyRight>
        </PaymentTableBody>
      </> : <></>}
      { balance !== '' || balancePaymentDay !== '' ? <>
        <PaymentTableBody>
          <PaymentTableBodyLeft>
            <div>잔       금</div>
          </PaymentTableBodyLeft>
          <PaymentTableBodyRight>
            <Bodyleft>
              <div>금</div>
              <div>
                {balance}원
              </div>
            </Bodyleft>
            <BodyRight>
              <div>
                원정은
                {balancePaymentDay !== '' ? <>{balancePaymentDay}</> : <>   년    월    일</>}
                에지급하며
              </div>
            </BodyRight>
          </PaymentTableBodyRight>
        </PaymentTableBody>
      </> : <></>}

      { paid !== '' || charge !== '' || chargePaymentDate !== '' ? <>
        <PaymentTableBody>
          <PaymentTableBodyLeft>
            <div>차       임</div>
          </PaymentTableBodyLeft>
          <PaymentTableBodyRight>

            <Bodyleft>
              <div>금</div>
              <div>
                {charge}원
              </div>
            </Bodyleft>
            <BodyRight>
              <div>
                원정은
                  {paid !== '' ? <> {paid}로 </> : <> (선불로⋅후불로) </>}
                매월 {chargePaymentDate}일에지급한다
              </div>
            </BodyRight>
          </PaymentTableBodyRight>
        </PaymentTableBody>
      </> : <></>}
    </PaymentBlock >
  );
};

export default Payment;