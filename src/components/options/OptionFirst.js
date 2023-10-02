import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import palette from '../../libs/styles/palette';

const OptionFirstBlock = styled.div`
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

  &.paddingBottomAdd {
  padding-bottom: 0.7rem;
  }
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
`

const OptionFirst = () => {
  const [hostRadio, setHostRadio] = useState(false);
  const [tenantRadio, setTenantRadio] = useState(false);
  const [hostInput, setHostInput] = useState('');
  const [tenantInput, setTenantInput] = useState('');

  const handleHostClick = (e) => {
    setHostRadio(e.target.value);
  }

  const handleTenantClick = (e) => {
    setTenantRadio(e.target.value);
  }

  useEffect(() => {
    setHostInput('');
  },[setHostInput, hostRadio]);

  useEffect(() => {
    setTenantInput('');
  },[setTenantInput, tenantRadio]);

  return (
    <OptionFirstBlock>
      <OptionBody>
        <RadioWrapper>
          <div className='title'>집주인</div>
          <RadioBox>
            <input type="radio" id="host법인" name="host" value="법인명" onClick={handleHostClick}/>
            <label for="host법인">법인</label>
            <input className="marginLeftAdd" type="radio" id="host개인사업자" name="host" value="상호(사업체명)" onClick={handleHostClick}/>
            <label for="host개인사업자">개인사업자</label>
            <input className="marginLeftAdd" type="radio" id="host개인" name="host" value="성명" onClick={handleHostClick}/>
            <label for="host개인">개인</label>
          </RadioBox>
          {
            hostRadio !== false && <>
              <InputBox>
                <label htmlFor='hostInput'>{hostRadio}</label>
                {
                  hostRadio === '법인명' ? 
                    <input
                      id="tenantInput"
                      type='text'
                      placeholder='법인명 입력'
                      value={hostInput} 
                      onChange={e => setTenantInput(e.target.value)}
                    />
                    : (hostRadio === '상호(사업체명)' ?
                    <input
                      id="tenantInput"
                      type='text'
                      placeholder='상호(사업체명) 입력'
                      value={hostInput} 
                      onChange={e => setTenantInput(e.target.value)}
                    />
                    : 
                    <input
                    id="tenantInput"
                    type='text'
                    placeholder='성명 입력'
                    value={hostInput} 
                    onChange={e => setTenantInput(e.target.value)}
                    />
                    )
                }
              </InputBox>
            </>
          }
        </RadioWrapper>
        
        <RadioWrapper className='paddingBottomAdd'>
          <RadioBox>
            <input type="radio" id="tenant법인" name="tenant" value="법인명" onClick={handleTenantClick}/>
            <label for="tenant법인">법인</label>
            <input  className="marginLeftAdd" type="radio" id="tenant개인사업자" name="tenant" value="상호(사업체명)" onClick={handleTenantClick}/>
            <label for="tenant개인사업자">개인사업자</label>
            <input  className="marginLeftAdd" type="radio" id="tenant개인" name="tenant" value="성명" onClick={handleTenantClick}/>
            <label for="tenant개인">개인</label>
          </RadioBox>
          {
            tenantRadio !== false && <>
              <InputBox>
                <label htmlFor='tenantInput'>{tenantRadio}</label>
                {
                  tenantRadio === '법인명' ? 
                    <input
                      id="tenantInput"
                      type='text'
                      placeholder='법인명 입력'
                      value={tenantInput} 
                      onChange={e => setTenantInput(e.target.value)}
                    />
                    : (tenantRadio === '상호(사업체명)' ?
                    <input
                      id="tenantInput"
                      type='text'
                      placeholder='상호(사업체명) 입력'
                      value={tenantInput} 
                      onChange={e => setTenantInput(e.target.value)}
                    />
                    : 
                    <input
                    id="tenantInput"
                    type='text'
                    placeholder='성명 입력'
                    value={tenantInput} 
                    onChange={e => setTenantInput(e.target.value)}
                    />
                    )
                }
              </InputBox>
            </>
          }
        </RadioWrapper>

      </OptionBody>
    </OptionFirstBlock >
  );
};

export default OptionFirst;