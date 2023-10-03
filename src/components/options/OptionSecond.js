import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import palette from '../../libs/styles/palette';
import dayjs from 'dayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useDispatch, useSelector } from 'react-redux';
import { changeMonthlyRent, changePaymentDate, changeType, changeStartDay, changeEndDay } from '../../modules/optionSecond';

const OptionSecondBlock = styled.div`
`;

const OptionBody = styled.div`
  background: ${palette.gray[1]};
  font-size: 0.9rem;

  .title{
    color: ${palette.gray[6]};
    font-weight: bold;
  }
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

const InputWrapper = styled.div`
  padding: 0.7rem;
  padding-top: 0;
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
  `

const DateBox = styled.div`
  margin: 1rem;
  margin-bottom: 0;
`

const OptionSecond = () => {
  const [startDay, setStartDay] = useState(dayjs('2023-09-26'));
  const [endDay, setEndDay] = useState(dayjs('2023-10-26'));

  const dispatch = useDispatch();
  const {type, monthlyRent, paymentDate} = useSelector(({optionSecond}) => ({
    type: optionSecond.type,
    monthlyRent: optionSecond.monthlyRent,
    paymentDate: optionSecond.paymentDate,
  }))

  const handleStartDayChange = (newValue) => {
    setStartDay(newValue)
    const startDay = newValue.$y + '년' + (newValue.$M + 1) + '월' + newValue.$D + '일'
    dispatch(
      changeStartDay(startDay)
    )
  }

  const handleEndDayChange = (newValue) => {
    setEndDay(newValue)
    const endDay = newValue.$y + '년' + (newValue.$M + 1) + '월' + newValue.$D + '일'
    dispatch(
      changeEndDay(endDay)
    )
  }

  return (
    <OptionSecondBlock>
      <OptionBody>

        <RadioWrapper>
          <div className='title'>임대차 계약의 종류</div>
          <RadioBox>
            <input
              type="radio"
              id="월세 및 반전세"
              name="type"
              value="월세 및 반전세"
              onClick={e => dispatch(changeType(e.target.value))}
            />
            <label for="월세 및 반전세">월세 및 반전세</label>
            <input
              className="marginLeftAdd"
              type="radio"
              id="전세"
              name="type"
              value="전세"
              onClick={e => dispatch(changeType(e.target.value))}
            />
            <label for="전세">전세</label>
          </RadioBox>
        </RadioWrapper>

       <DateWrapper>
        <div className='title'>임대차 계약기간</div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateBox>
            <DatePicker 
              label="시작일"
              value={startDay}
              onChange={handleStartDayChange}
            />
          </DateBox>
          <DateBox>
            <DatePicker
              label="종료일"
              value={endDay}
              onChange={handleEndDayChange}
            />
          </DateBox>
        </LocalizationProvider>
       </DateWrapper>

        {
          type === '월세 및 반전세' ? <>
            <InputWrapper>
              <div className='title'>월세금액</div>
              <InputBox>
                <label htmlFor='월세금액'>금액</label>
                <input
                  id="월세금액"
                  type='text'
                  placeholder='월세금액 입력'
                  value={monthlyRent}
                  onChange={e => dispatch(changeMonthlyRent(e.target.value))}
                />
                <span>원</span>
              </InputBox>
            </InputWrapper>

            <InputWrapper>
              <div className='title'>지불일</div>
              <InputBox>
                <label htmlFor='지불일'>매월</label>
                <input
                  id='지불일'
                  type='text'
                  placeholder='지불일 입력'
                  value={paymentDate}
                  onChange={e => dispatch(changePaymentDate(e.target.value))}
                />
                <span>일</span>
              </InputBox>
            </InputWrapper>
          </> : <></>
        }

      </OptionBody>
    </OptionSecondBlock >
  );
};

export default OptionSecond;