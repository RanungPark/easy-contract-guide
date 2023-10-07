import React, { useState } from 'react';
import { styled } from 'styled-components';
import palette from '../../libs/styles/palette';
import dayjs from 'dayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { useDispatch, useSelector } from 'react-redux';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { changeAccountHolder, changeAccountNumber, changeBalance, changeBalancePaymentDay, changeBankName, changeCharge, changeChargePaymentDate, changeDownPayment, changeMiddlePayment, changeMiddlePaymentDay, changePayer, changeSubsidy, togglePaid } from '../../modules/optionThird';

const OptionThirdBlock = styled.div``;

const OptionBody = styled.div`
  background: ${palette.gray[1]};
  font-size: 0.9rem;

  .title{
    color: ${palette.gray[6]};
    font-weight: bold;
  }
`

const InputWrapper = styled.div`
  padding: 0.7rem;
  padding-bottom: 0;

  &.paddingBottomAdd {
  padding-bottom: 0.7rem;
  }
`
const CheckWrapper = styled.div`
  padding: 0.7rem;
  padding-bottom: 0;

  &.paddingBottomAdd {
  padding-bottom: 0.7rem;
  }
`

const InputBox = styled.div`
  margin-top: 0.7rem;
  background: white;
  border: 0.5px solid #3DA5F5;
  border-radius: 25px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;

  input,
  label {
    border: none;
    outline: none;
    font-size: 1rem;
    padding: 0.5rem;
  } 
  
  input{
    margin-right:0.5rem;
    max-width:100%;
    min-width: 0;
    flex: 1;
    background: white;
    color: ${palette.gray[7]};
    &::placeholder {
      color: #a0a0a0;
      font-size: 0.9rem;
    }
  }
  
  label {
    font-size: 0.9rem;
  }

  span {
    padding-right:0.5rem;
    display: inline-block;
  }
`

const DateBox = styled.div`
  margin: 1rem;
  margin-bottom: 0;
`

const RadioBox = styled.div`
  display: flex;
  margin-top: 0.7rem;

  input {
    &.marginLeftAdd {
      margin-left: 2rem;
    }
  }
`

const OptionThird = () => {
  const [middlePaymentToggle, setMiddlePaymentToggle] = useState(false);
  const [middlePaymentDay, setMiddlePaymentDay] = useState(dayjs('2023-09-26'));

  const [balanceToggle, setBalanceToggle] = useState(false);
  const [balancePaymentDay, setBalancePaymentDay] = useState(dayjs('2023-09-26'));

  const [chargeToggle, setChargeToggle] = useState(false);

  const dispatch = useDispatch();
  const {
    type,
    subsidy,
    downPayment,
    payer,
    middlePayment,
    balance,
    charge,
    chargePaymentDate,
    bankName,
    accountNumber,
    accountHolder,
    } = useSelector(({optionSecond, optionThird}) => ({
        type: optionSecond.type,
        subsidy: optionThird.subsidy,
        downPayment: optionThird.downPayment,
        payer: optionThird.payer,
        middlePayment: optionThird.middlePayment,
        balance: optionThird.balance,
        charge: optionThird.charge,
        chargePaymentDate: optionThird.chargePaymentDate,
        bankName: optionThird.bankName,
        accountNumber: optionThird.accountNumber,
        accountHolder: optionThird.accountHolder,
      }))

  const handleMiddlePaymentDayChange = (newValue) => {
    setMiddlePaymentDay(newValue)
    const middlePaymentDay = newValue.$y + '년' + (newValue.$M + 1) + '월' + newValue.$D + '일'
    dispatch(
      changeMiddlePaymentDay(middlePaymentDay)
    )
  }

  const handleBalancePaymentDayChange = (newValue) => {
    setBalancePaymentDay(newValue)
    const balancePaymentDay = newValue.$y + '년' + (newValue.$M + 1) + '월' + newValue.$D + '일'
    dispatch(
      changeBalancePaymentDay(balancePaymentDay)
    )
  }

  return (
    <OptionThirdBlock>
      { type !== '' &&
        <OptionBody>

          <InputWrapper>
            { 
              type === '월세 및 반전세' ? 
              <>
                <div className='title'>보증금</div>
                <InputBox>
                  <label htmlFor='보증금'>금</label>
                  <input
                    id="보증금"
                    type='text'
                    placeholder='보증금 입력'
                    value={subsidy}
                    onChange={e =>{ 
                      const value = e.target.value;
                      const filteredValue = value.replace(/[^0-9]/g, '');
                      dispatch(changeSubsidy(filteredValue))
                    }}
                  />
                  <span>원</span>
                </InputBox>
              </> : <>
                <div className='title'>전세 보증금</div>
                <InputBox>
                  <label htmlFor='전세 보증금'>금</label>
                  <input
                    id="전세 보증금"
                    type='text'
                    placeholder='전세 보증금 입력'
                    value={subsidy}
                    onChange={e =>{ 
                      const value = e.target.value;
                      const filteredValue = value.replace(/[^0-9]/g, '');
                      dispatch(changeSubsidy(filteredValue))
                    }}
                  />
                  <span>원</span>
                </InputBox>
              </>
            }
          </InputWrapper>

          <InputWrapper>
            <div className='title'>계약금</div>
            <InputBox>
              <label htmlFor='계약금'>금</label>
              <input
                id="계약금"
                type='text'
                placeholder='계약금 입력'
                value={downPayment}
                onChange={e =>{ 
                  const value = e.target.value;
                  const filteredValue = value.replace(/[^0-9]/g, '');
                  dispatch(changeDownPayment(filteredValue))
                }}
              />
              <span>원</span>
            </InputBox>
            <InputBox>
              <input
                type='text'
                placeholder='영수자 입력'
                value={payer}
                onChange={e =>{
                  const value = e.target.value;
                  const filteredValue = value.replace(/[^\p{Script=Hangul}]/gu, '');
                  dispatch(changePayer(filteredValue))
                }}
              />
            </InputBox>
          </InputWrapper>

          <CheckWrapper>
            <input 
              id='중도금'
              type="checkbox"
              onClick={() => setMiddlePaymentToggle(!middlePaymentToggle)}
            />
            <label className="title" htmlFor="중도금">중도금</label>
            {
              middlePaymentToggle &&
              <>
                <InputBox>
                  <label htmlFor='중도금 입력'>금</label>
                  <input 
                    id='중도금 입력'
                    type='text'
                    placeholder='중도금 입력'
                    value={middlePayment}
                    onChange={e =>{ 
                      const value = e.target.value;
                      const filteredValue = value.replace(/[^0-9]/g, '');
                      dispatch(changeMiddlePayment(filteredValue))
                    }}
                  />
                  <span>원</span>
                </InputBox>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateBox>
                    <DatePicker 
                      label="중도금 지급일"
                      value={middlePaymentDay}
                      onChange={handleMiddlePaymentDayChange}
                    />
                  </DateBox>
                </LocalizationProvider>
              </>
            }
          </CheckWrapper>

          <CheckWrapper>
            <input 
              id='잔금'
              type="checkbox"
              onClick={() => setBalanceToggle(!balanceToggle)}
            />
            <label className="title" htmlFor="잔금">잔금</label>
            {
              balanceToggle &&
              <>
                <InputBox>
                  <label htmlFor='잔금 입력'>금</label>
                  <input 
                    id='잔금 입력'
                    type='text'
                    placeholder='잔금 입력'
                    value={balance}
                    onChange={e =>{ 
                      const value = e.target.value;
                      const filteredValue = value.replace(/[^0-9]/g, '');
                      dispatch(changeBalance(filteredValue))
                    }}
                  />
                  <span>원</span>
                </InputBox>
            
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateBox>
                    <DatePicker 
                      label="잔금 지급일"
                      value={balancePaymentDay}
                      onChange={handleBalancePaymentDayChange}
                    />
                  </DateBox>
                </LocalizationProvider>
              </>
            }
          </CheckWrapper>

          <CheckWrapper>
          <input 
              id='차임'
              type="checkbox"
              onClick={() => setChargeToggle(!chargeToggle)}
            />
            <label className="title" htmlFor="차임">차임</label>
            {
              chargeToggle &&
              <>
                <RadioBox>
                  <input
                    type="radio"
                    id="선불"
                    name='paid'
                    value='선불'
                    onClick={e => dispatch(togglePaid(e.target.value))}
                  />
                  <label for="선불">선불</label>
                  <input
                    className="marginLeftAdd"
                    type="radio"
                    id="후불"
                    name='paid'
                    value='후불'
                    onClick={e => dispatch(togglePaid(e.target.value))}
                  />
                  <label for="후불">후불</label>
                </RadioBox>

                <InputBox>
                  <label htmlFor='차임액 입력'>금</label>
                  <input 
                    id='차임액 입력'
                    type='text'
                    placeholder='차임액 입력'
                    value={charge}
                    onChange={e =>{ 
                      const value = e.target.value;
                      const filteredValue = value.replace(/[^0-9]/g, '');
                      dispatch(changeCharge(filteredValue))
                    }}
                  />
                  <span>원</span>
                </InputBox>

                <InputBox>
                  <input 
                    type='text'
                    placeholder='차임 지급일 입력'
                    value={chargePaymentDate}
                    onChange={e =>{ 
                      const value = e.target.value;
                      const filteredValue = value.replace(/[^0-9]/g, '');
                      dispatch(changeChargePaymentDate(filteredValue))
                    }}
                  />
                  <span>일</span>
                </InputBox>
              </>
            }
          </CheckWrapper>
        
          <InputWrapper className='paddingBottomAdd'>
            <div className='title'>계좌 정보</div>
            <InputBox>
              <label htmlFor='은행명'>은행명</label>
              <input
                id="은행명"
                type='text'
                placeholder='은행명 입력'
                value={bankName}
                onChange={e =>{
                  const value = e.target.value;
                  const filteredValue = value.replace(/[^\p{Script=Hangul}]/gu, '');
                  dispatch(changeBankName(filteredValue))
                }}
              />
            </InputBox>
            <InputBox>
              <label htmlFor='계좌번호'>계좌번호</label>
              <input
                id="계좌번호"
                type='text'
                placeholder='계좌번호 입력'
                value={accountNumber}
                onChange={e =>{ 
                  const value = e.target.value;
                  const filteredValue = value.replace(/[^0-9]/g, '');
                  dispatch(changeAccountNumber(filteredValue))
                }}
              />
            </InputBox>
            <InputBox>
              <label htmlFor='예금주'>예금주</label>
              <input
                id="예금주"
                type='text'
                placeholder='예금주 입력'
                value={accountHolder}
                onChange={e =>{
                  const value = e.target.value;
                  const filteredValue = value.replace(/[^\p{Script=Hangul}]/gu, '');
                  dispatch(changeAccountHolder(filteredValue))
                }}
              />
            </InputBox>
          </InputWrapper>

        </OptionBody>
      }
    </OptionThirdBlock >
  );
};

export default OptionThird;