import React, { useState } from 'react';
import { styled } from 'styled-components';
import palette from '../../libs/styles/palette';
import dayjs from 'dayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const OptionSecondBlock = styled.div`
`;

const OptionBody = styled.div`

  background: ${palette.gray[1]};
  .title{
    color: ${palette.gray[6]};
    font-weight: bold;
  }
  .radioItem {
    margin-right: 0.5rem;
    
  }
  .radioBox {
    display: flex;
  }
  font-size: 0.9rem;
`

const RadioWrapper = styled.div`
  padding: 0.7rem;
`

const InputWrapper = styled.div`
  display: flex;
  padding: 0.7rem;
  justify-content: space-between;
`

const InputBox = styled.div`
  
`

const InputItem = styled.div`
  margin-top: 1rem;
  background: white;
  border: 0.5px solid #3DA5F5;
  border-radius: 25px;
  
  input,
  label {
    border: none;
    outline: none;
    font-size: 1rem;
    padding: 0.5rem;
  } 

  input {
    min-width: 0;
    max-width: 7rem;
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
  }
`

const DatePickerItem = styled.div`
  margin: 1rem;
`

const DateWrapper = styled.div`
  padding: 0.7rem;
`

const OptionSecond = () => {
  const [type, setType] = useState('');


  const [startDay, setStartDay] = React.useState(dayjs('2023-09-26'));
  const [endDay, setEndDay] = React.useState(dayjs('2023-10-26'));

  const handleTypeClick = (e) => {
    setType(e.target.value);
  }

  return (
    <OptionSecondBlock>
      <OptionBody>
        <RadioWrapper>
          <div className='title'>임대차 계약의 종류</div>
          <div className='radioBox'>
            <div className='radioItem'>
              <input type="radio" id="월세" name="content" value="월세" onClick={handleTypeClick}/>
              <label for="월세">월세 및 반전세</label>
            </div>
            <div className='radioItem'>
              <input type="radio" id="전세" name="content" value="전세" onClick={handleTypeClick}/>
              <label for="전세">전세</label>
            </div>
          </div>
        </RadioWrapper>

       <DateWrapper>
       <div className='title'>임대차 계약기간</div>

       <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePickerItem>
          <DatePicker 
            label="시작일"
            value={startDay}
            onChange={(newValue) => setStartDay(newValue)}
          />
          </DatePickerItem>
          <DatePickerItem>
          <DatePicker
            label="종료일"
            value={endDay}
            onChange={(newValue) => setEndDay(newValue)}
          />
          </DatePickerItem>
        </LocalizationProvider>
       </DateWrapper>
        {
          type === '월세' ? <>
            <InputWrapper>
              <InputBox>
                <div className='title'>월세금액</div>
                <InputItem>
                  <label htmlFor='금액'>금액</label>
                  <input id="금액" type='text' placeholder='입력'/>
                  <span>원</span>
                </InputItem>
              </InputBox>
              <InputBox>
                <div className='title'>지불일</div>
                <InputItem>
                  <label htmlFor='매월'>매월</label>
                  <input id='매월' type='text' placeholder='입력'/>
                  <span>일</span>
                </InputItem>
              </InputBox>
            </InputWrapper>
          </> : <></>
        }
      </OptionBody>
    </OptionSecondBlock >
  );
};

export default OptionSecond;