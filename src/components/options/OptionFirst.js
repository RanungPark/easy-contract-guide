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
  const [host, setHost] = useState(false);
  const [tenant, setTenant] = useState(false);

  const handleHostClick = (e) => {
    console.log(e.target.value);
    setHost(e.target.value);
  }

  const handleTenantClick = (e) => {
    console.log(e.target.value);
    setTenant(e.target.value);
  }

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
            host !== false && <>
              <InputBox>
                <label>{host}</label>
                <input type='text' placeholder='입력'/>
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
            tenant !== false && <>
              <InputBox>
                <label>{tenant}</label>
                <input type='text' placeholder='입력'/>
              </InputBox>
            </>
          }
        </RadioWrapper>
      </OptionBody>
    </OptionFirstBlock >
  );
};

export default OptionFirst;