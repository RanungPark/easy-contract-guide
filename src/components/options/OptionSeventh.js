import React, { useState } from 'react';
import { styled } from 'styled-components';
import palette from '../../libs/styles/palette';
import Address from '../common/Address';

const OptionSeventhBlock = styled.div``;

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
  
  input{
    margin-right:0.5rem;
    border: none;
    outline: none;
    font-size: 1rem;
    padding: 0.5rem;
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


const OptionSeventh = () => {
  const [name, setName] = useState('')
  const [residentNum, setResidentNum] = useState('')
  const [address, setAddress] = useState('')
  const [restAddress, setRestAddress] = useState('')
  const [phoneNum, setPhoneNum] = useState('')
  const [tenantType, setTenantType] = useState('')

  return (
    <OptionSeventhBlock>
      <OptionBody>
      {
          tenantType === '법인' ? <>
            <InputWrapper>
            <div className='title'>법인명</div>
            <InputBox>
              <input
                type='text'
                placeholder='법인명 입력'
              />
            </InputBox>
            </InputWrapper>

            <InputWrapper>
              <div className='title'>대표이사</div>
              <InputBox>
                <input
                  type='text'
                  placeholder='대표이사 입력'
                />
              </InputBox>
            </InputWrapper>
          </> : (tenantType === '개인사업자' ? <>
            <InputWrapper>
              <div className='title'>상호(사업체명)</div>
              <InputBox>
                <input
                  type='text'
                  placeholder='개인사업자 입력'
                />
              </InputBox>
            </InputWrapper>

            <InputWrapper>
              <div className='title'>사업주명</div>
              <InputBox>
                <input 
                  type='text'
                  placeholder='사업주명 입력'
                />
              </InputBox>
            </InputWrapper>
          </>: <>
            <InputWrapper>
              <div className='title'>성명</div>
              <InputBox>
                <input
                  type='text'
                  placeholder='성명 입력'
                />
              </InputBox>
            </InputWrapper>

            <InputWrapper>
              <div className='title'>주민번호</div>
              <InputBox>
                <input 
                  type='text' 
                  placeholder='주민번호 입력'
                />
              </InputBox>
            </InputWrapper>
          </>)
        }

        <AddressWrapper>
          <div className='title'>주소</div>
          <AddresBox >
            <Address setAddress={setAddress} address={address}/>
          </AddresBox>
          <InputBox>
            <input
              type='text'
              placeholder='상세주소를 입력해주세요'
            />
          </InputBox>
        </AddressWrapper>
        
        <InputWrapper className='paddingBottomAdd'>
          <div className='title'>전화번호</div>
          <InputBox>
            <input
              type='text'
              placeholder='전호번호 입력'
            />
          </InputBox>
        </InputWrapper>

      </OptionBody>
    </OptionSeventhBlock >
  );
};

export default OptionSeventh;