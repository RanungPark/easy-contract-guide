import React, { useState } from 'react';
import { styled } from 'styled-components';
import palette from '../../libs/styles/palette';
import Address from '../common/Address';

const OptionFifthBlock = styled.div``;

const OptionBody = styled.div`
  background: ${palette.gray[1]};
  font-size: 0.9rem;

  .title{
    color: ${palette.gray[6]};
    font-weight: bold;
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

const AddressWrapper = styled.div`
  padding: 0.7rem;
  padding-bottom: 0;
`

const AddresBox = styled.div`
  margin-top: 0.7rem;
  background: white;
  border: 0.5px solid #3DA5F5;
  border-radius: 25px;
  font-size: 1rem;
  height: 2.4rem;
  display: flex;
  align-items:center;
  padding: 0.5rem;
  color: ${palette.gray[7]};

  .placeholder {
    color: #a0a0a0;
    font-size: 0.9rem;
  }
`

const OptionFifth = () => {
  const [address, setAddress] = useState('')
  const [restAddress, setRestAddress] = useState('')

  return (
    <OptionFifthBlock>
      <OptionBody>
        
        <AddressWrapper>
          <div className='title'>소재지</div>
          <AddresBox >
            <Address setAddress={setAddress} address={address}/>
          </AddresBox>
          <InputBox>
            <input type='text' placeholder='상세주소를 입력해주세요'/>
          </InputBox>
        </AddressWrapper>

        <CheckWrapper>
          <input type="checkbox" />
          <label className="title" htmlFor="">토지용도</label>
          <InputBox>
            <input type='text' placeholder='토지용도 입력'/>
          </InputBox>
          <InputBox>
            <div>
              <label htmlFor='잔금'>면적</label>
              <input type='text' placeholder='토지용도 면적 입력'/>
            </div>
            <span>m²</span>
          </InputBox>
        </CheckWrapper>

        <CheckWrapper>
          <input type="checkbox" />
          <label className="title" htmlFor="">건물 구조⋅용도</label>
          <InputBox>
            <input type='text' placeholder='건물 구조⋅용도 입력'/>
          </InputBox>
          <InputBox>
            <div>
              <label htmlFor='잔금'>면적</label>
              <input type='text' placeholder='건물 구조⋅용도 면적 입력'/>
            </div>
            <span>m²</span>
          </InputBox>
        </CheckWrapper>

        <CheckWrapper className='paddingBottomAdd'>
          <input type="checkbox" />
          <label className="title" htmlFor="">임대할 부분</label>
          <InputBox>
            <input type='text' placeholder='임대할 부분 입력'/>
          </InputBox>
          <InputBox>
            <div>
              <label htmlFor='잔금'>면적</label>
              <input type='text' placeholder='임대할 부분 면적 입력'/>
            </div>
            <span>m²</span>
          </InputBox>
        </CheckWrapper>

      </OptionBody>
    </OptionFifthBlock >
  );
};

export default OptionFifth;