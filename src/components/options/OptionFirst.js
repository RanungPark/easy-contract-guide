import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import palette from '../../libs/styles/palette';

const OptionFirstBlock = styled.div`
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

const InputBox = styled.div`
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

  const handleHostChange = (e) => {
    setHostInput(e.target.value);
  }

  const handleTenantChange = (e) => {
    setTenantInput(e.target.value);
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
          <div className='radioBox'>
          <div className='radioItem'>
            <input type="radio" id="host법인" name="host" value="법인명" onClick={handleHostClick}/>
            <label for="host법인">법인</label>
          </div>
          <div className='radioItem'>
            <input type="radio" id="host개인사업자" name="host" value="상호" onClick={handleHostClick}/>
            <label for="host개인사업자">개인사업자</label>
          </div>
          <div className='radioItem'>
            <input type="radio" id="host개인" name="host" value="성명" onClick={handleHostClick}/>
            <label for="host개인">개인</label>
          </div>
          </div>
          {
            hostRadio !== false && <>
              <InputBox>
                <label htmlFor='hostInput'>{hostRadio}</label>
                <input id="hostInput" type='text' placeholder='입력' value={hostInput} onChange={handleHostChange}/>
              </InputBox>
            </>
          }
        </RadioWrapper>
        <RadioWrapper>
          <div className='title'>세입자</div>
          <div className='radioBox'>
          <div className='radioItem'>
            <input type="radio" id="tenant법인" name="tenant" value="법인" onClick={handleTenantClick}/>
            <label for="tenant법인">법인</label>
          </div>
          <div className='radioItem'>
            <input type="radio" id="tenant개인사업자" name="tenant" value="상호" onClick={handleTenantClick}/>
            <label for="tenant개인사업자">개인사업자</label>
          </div>
          <div className='radioItem'>
            <input type="radio" id="tenant개인" name="tenant" value="개인" onClick={handleTenantClick}/>
            <label for="tenant개인">개인</label>
          </div>
          </div>  
          {
            tenantRadio !== false && <>
              <InputBox>
                <label htmlFor='tenantInput'>{tenantRadio}</label>
                <input id="tenantInput" type='text' placeholder='입력' value={tenantInput} onChange={handleTenantChange}/>
              </InputBox>
            </>
          }
        </RadioWrapper>
      </OptionBody>
    </OptionFirstBlock >
  );
};

export default OptionFirst;