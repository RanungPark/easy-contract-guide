import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import palette from '../../libs/styles/palette';
import { useDispatch, useSelector } from 'react-redux';
import { changeHost, changeHostType, changeTenant, changeTenantType } from '../../modules/optionFirst';

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
  const dispatch = useDispatch();
  const {hostType, host, tenant, tenantType} = useSelector(({optionFirst}) => ({
    hostType: optionFirst.hostType,
    host: optionFirst.host,
    tenant: optionFirst.tenant,
    tenantType: optionFirst.tenantType,
  }))

  useEffect(() => {
    dispatch(
      changeHost('')
    );
  },[dispatch, hostType]);

  useEffect(() => {
     dispatch(
      changeTenant('')
    );
  },[dispatch, tenantType]);

  return (
    <OptionFirstBlock>
      <OptionBody>
        <RadioWrapper>
          <div className='title'>집주인</div>
          <RadioBox>
            <input 
              type="radio"
              id="host법인"
              name="host"
              value="법인명"
              onClick={e => dispatch(changeHostType(e.target.value))}
            />
            <label for="host법인">법인</label>
            <input
              className="marginLeftAdd"
              type="radio"
              id="host개인사업자"
              name="host"
              value="상호(사업체명)"
              onClick={e => dispatch(changeHostType(e.target.value))}
            />
            <label for="host개인사업자">개인사업자</label>
            <input
              className="marginLeftAdd"
              type="radio"
              id="host개인"
              name="host"
              value="성명"
              onClick={e => dispatch(changeHostType(e.target.value))}
            />
            <label for="host개인">개인</label>
          </RadioBox>
          {
            hostType !== '' && <>
              <InputBox>
                <label htmlFor='hostInput'>{hostType}</label>
                {
                  hostType === '법인명' ? 
                    <input
                      id="hostInput"
                      type='text'
                      placeholder='법인명 입력'
                      value={host} 
                      onChange={e => dispatch(changeHost(e.target.value))}
                    />
                    : (hostType === '상호(사업체명)' ?
                    <input
                      id="hostInput"
                      type='text'
                      placeholder='상호(사업체명) 입력'
                      value={host} 
                      onChange={e => dispatch(changeHost(e.target.value))}
                    />
                    : 
                    <input
                    id="hostInput"
                    type='text'
                    placeholder='성명 입력'
                    value={host} 
                    onChange={e =>  {
                      const value = e.target.value;
                      const filteredValue = value.replace(/[^\p{Script=Hangul}]/gu, '');
                      dispatch(changeHost(filteredValue))
                    }}
                    />
                    )
                }
              </InputBox>
            </>
          }
        </RadioWrapper>
        
        <RadioWrapper className='paddingBottomAdd'>
          <div className='title'>세입자</div>
          <RadioBox>
            <input
              type="radio"
              id="tenant법인"
              name="tenant"
              value="법인명"
              onClick={e => dispatch(changeTenantType(e.target.value))}
            />
            <label for="tenant법인">법인</label>
            <input 
              className="marginLeftAdd"
              type="radio"
              id="tenant개인사업자" 
              name="tenant"
              value="상호(사업체명)" 
              onClick={e => dispatch(changeTenantType(e.target.value))}
            />
            <label for="tenant개인사업자">개인사업자</label>
            <input 
              className="marginLeftAdd"
              type="radio"
              id="tenant개인"
              name="tenant"
              value="성명"
              onClick={e => dispatch(changeTenantType(e.target.value))}
            />
            <label for="tenant개인">개인</label>
          </RadioBox>
          {
            tenantType !== '' && <>
              <InputBox>
                <label htmlFor='tenantInput'>{tenantType}</label>
                {
                  tenantType === '법인명' ? 
                    <input
                      id="tenantInput"
                      type='text'
                      placeholder='법인명 입력'
                      value={tenant} 
                      onChange={e => dispatch(changeTenant(e.target.value))}
                    />
                    : (tenantType === '상호(사업체명)' ?
                    <input
                      id="tenantInput"
                      type='text'
                      placeholder='상호(사업체명) 입력'
                      value={tenant} 
                      onChange={e => dispatch(changeTenant(e.target.value))}
                    />
                    : 
                    <input
                    id="tenantInput"
                    type='text'
                    placeholder='성명 입력'
                    value={tenant} 
                    onChange={e =>{
                      const value = e.target.value;
                      const filteredValue = value.replace(/[^\p{Script=Hangul}]/gu, '');
                      dispatch(changeTenant(filteredValue))
                    }}
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