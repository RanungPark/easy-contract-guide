import React, { useState } from 'react';
import { styled } from 'styled-components';
import palette from '../../libs/styles/palette';
import dayjs from 'dayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

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

const DateWrapper = styled.div`
  padding: 0.7rem;
  padding-bottom: 0;
  `

const DateBox = styled.div`
  margin: 1rem;
  margin-bottom: 0;
`

const RadioWrapper = styled.div`
  padding: 0.7rem;
  padding-bottom: 0;
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
  const [middlePaymentDay, setMiddlePaymentDay] = useState(dayjs('2023-09-26'));
  const [balancePaymentDay, setBalancePaymentDay] = useState(dayjs('2023-09-26'));
  const [type, setType] = useState('');

  const [subsidy, setSubsidy] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [middlePayment, setMiddlePayment] = useState('');
  const [balance, setBalance] = useState('');

  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [accountHolder, setAccountHolder] = useState('');

  return (
    <OptionThirdBlock>
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
                  onChange={e => setSubsidy(e.target.value)}
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
                  onChange={e => setSubsidy(e.target.value)}
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
              onChange={e => setDownPayment(e.target.value)}
            />
            <span>원</span>
          </InputBox>
        </InputWrapper>

        <InputWrapper>
          <div className='title'>중도금</div>
          <InputBox>
            <label htmlFor='중도금'>금</label>
            <input 
              id='중도금'
              type='text'
              placeholder='중도금 입력'
              value={middlePayment}
              onChange={e => setMiddlePayment(e.target.value)}
            />
            <span>원</span>
          </InputBox>
        </InputWrapper>

        <DateWrapper>
          <div className='title'>중도금 지급날짜</div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateBox>
              <DatePicker 
                label="중도금 지급일"
                value={middlePaymentDay}
                onChange={(newValue) => setMiddlePaymentDay(newValue)}
              />
            </DateBox>
          </LocalizationProvider>
        </DateWrapper>
        

        <InputWrapper>
          <div className='title'>잔금</div>
          <InputBox>
            <label htmlFor='잔금'>금</label>
            <input 
              id='잔금'
              type='text'
              placeholder='잔금 입력'
              value={balance}
              onChange={e => setBalance(e.target.value)}
            />
            <span>원</span>
          </InputBox>
        </InputWrapper>

        <DateWrapper>
          <div className='title'>잔금 지급날짜</div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateBox>
              <DatePicker 
                label="잔금 지급일"
                value={balancePaymentDay}
                onChange={(newValue) => setBalancePaymentDay(newValue)}
              />
            </DateBox>
          </LocalizationProvider>
        </DateWrapper>

        <RadioWrapper>
          <div className='title'>차임</div>
          <RadioBox>
            <input
              type="radio"
              id="선불"
              name='type'
            />
            <label for="선불">선불</label>
            <input
              className="marginLeftAdd"
              type="radio"
              id="후불"
              name='type'
            />
            <label for="후불">후불</label>
          </RadioBox>
          <InputBox>
            <label htmlFor='차임'>금</label>
            <input 
              id='차임'
              type='text'
              placeholder='차임 입력'
              value={balance}
              onChange={e => setBalance(e.target.value)}
            />
            <span>원</span>
          </InputBox>
        </RadioWrapper>
        
        <InputWrapper className='paddingBottomAdd'>
          <div className='title'>계좌 정보</div>
          <InputBox>
            <label htmlFor='은행명'>은행명</label>
            <input
              id="은행명"
              type='text'
              placeholder='은행명 입력'
              value={bankName}
              onChange={e => setBankName(e.target.value)}
            />
          </InputBox>
          <InputBox>
            <label htmlFor='계좌번호'>계좌번호</label>
            <input
              id="계좌번호"
              type='text'
              placeholder='계좌번호 입력'
              value={accountNumber}
              onChange={e => setAccountNumber(e.target.value)}
            />
          </InputBox>
          <InputBox>
            <label htmlFor='예금주'>예금주</label>
            <input
              id="예금주"
              type='text'
              placeholder='예금주 입력'
              value={accountHolder}
              onChange={e => setAccountHolder(e.target.value)}
            />
          </InputBox>
        </InputWrapper>

      </OptionBody>
    </OptionThirdBlock >
  );
};

export default OptionThird;