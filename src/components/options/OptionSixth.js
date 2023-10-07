import React, { useState } from 'react';
import { styled } from 'styled-components';
import palette from '../../libs/styles/palette';
import Address from '../common/Address';
import { useDispatch, useSelector } from 'react-redux';
import { changeHostAddress, changeHostInputFirst, changeHostInputSecond, changeHostPhoneNum, changeHostRestAddress } from '../../modules/optionSixth';

const OptionSixthBlock = styled.div``;

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

const OptionSixth = () => {
  const [address, setAddress] = useState('');
  
  const dispatch = useDispatch();
  const {
    hostType,
    hostInputFirst,
    hostInputSecond,
    hostRestAddress,
    hostPhoneNum
    } = useSelector(({optionFirst, optionSixth}) => ({
        hostType: optionFirst.hostType,
        hostInputFirst: optionSixth.hostInputFirst,
        hostInputSecond: optionSixth.hostInputSecond,
        hostRestAddress: optionSixth.hostRestAddress,
        hostPhoneNum: optionSixth.hostPhoneNum,
      }))

    const handleChnageAddress = (fullAddress) => {
      setAddress(fullAddress)
      dispatch(changeHostAddress(fullAddress))
    };

  return (
    <OptionSixthBlock>
      { hostType !== '' && 
        <OptionBody>
          
          {
            hostType === '법인명' ? <>
              <InputWrapper>
                <div className='title'>법인명</div>
                <InputBox>
                  <input
                    type='text'
                    placeholder='법인명 입력'
                    value={hostInputFirst}
                    onChange={(e) => dispatch(changeHostInputFirst(e.target.value))}
                  />
                </InputBox>
              </InputWrapper>

              <InputWrapper>
                <div className='title'>대표이사</div>
                <InputBox>
                  <input 
                    type='text'
                    placeholder='대표이사 입력'
                    value={hostInputSecond}
                    onChange={e =>{
                      const value = e.target.value;
                      const filteredValue = value.replace(/[^\p{Script=Hangul}]/gu, '');
                      dispatch(changeHostInputSecond(filteredValue))
                    }}
                  />
                </InputBox>
              </InputWrapper>
            </> : (hostType === '상호(사업체명)' ? <>
              <InputWrapper>
                <div className='title'>상호(사업체명)</div>
                <InputBox>
                  <input
                    type='text'
                    placeholder='상호(사업체명) 입력'
                    value={hostInputFirst}
                    onChange={(e) => dispatch(changeHostInputFirst(e.target.value))}
                  />
                </InputBox>
              </InputWrapper>

              <InputWrapper>
                <div className='title'>사업주명</div>
                <InputBox>
                  <input
                    type='text'
                    placeholder='사업주명 입력'
                    value={hostInputSecond}
                    onChange={e =>{
                      const value = e.target.value;
                      const filteredValue = value.replace(/[^\p{Script=Hangul}]/gu, '');
                      dispatch(changeHostInputSecond(filteredValue))
                    }}
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
                    value={hostInputFirst}
                    onChange={e =>{
                      const value = e.target.value;
                      const filteredValue = value.replace(/[^\p{Script=Hangul}]/gu, '');
                      dispatch(changeHostInputFirst(filteredValue))
                    }}
                  />
                </InputBox>
              </InputWrapper>

              <InputWrapper>
                <div className='title'>주민번호</div>
                <InputBox>
                  <input
                    type='text'
                    placeholder='주민번호 입력'
                    value={hostInputSecond}
                    onChange={e =>{ 
                      const value = e.target.value;
                      const filteredValue = value.replace(/[^0-9]/g, '');
                      dispatch(changeHostInputSecond(filteredValue))
                    }}
                  />
                </InputBox>
              </InputWrapper>
            </>)
          }

          <AddressWrapper>
            <div className='title'>주소</div>
            <AddresBox >
              <Address handleChnageAddress={handleChnageAddress} address={address}/>
            </AddresBox>
            <InputBox>
              <input
                type='text'
                placeholder='상세주소를 입력해주세요'
                value={hostRestAddress}
                onChange={(e) => dispatch(changeHostRestAddress(e.target.value))}
              />
            </InputBox>
          </AddressWrapper>

          <InputWrapper className='paddingBottomAdd'>
            <div className='title'>전화번호</div>
            <InputBox>
              <input
                type='text'
                placeholder='전호번호 입력'
                value={hostPhoneNum}
                onChange={e =>{ 
                  const value = e.target.value;
                  const filteredValue = value.replace(/[^0-9]/g, '');
                  dispatch(changeHostPhoneNum(filteredValue))
                }}
              />
            </InputBox>
          </InputWrapper>

        </OptionBody>
      }
    </OptionSixthBlock >
  );
};

export default OptionSixth;