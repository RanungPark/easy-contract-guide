import React, { useState } from 'react';
import { styled } from 'styled-components';
import palette from '../../libs/styles/palette';
import { useDispatch, useSelector } from 'react-redux';
import { changeBuiltIn, changeCleaning, changeDirect } from '../../modules/optionFourth';

const OptionFourthBlock = styled.div``;

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
  flex: 1;
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

const OptionFourth = () => {
  const [builtInToggle, setBuiltInToggle] = useState(false);
  const [cleaningToggle , setCleaningToggle] = useState(false);
  const [directToggle, setDirectToggle] = useState(false);
  
  const dispatch = useDispatch();
  const {builtIn, cleaning, direct} = useSelector(({optionFourth}) => ({
    builtIn:optionFourth.builtIn,
    cleaning:optionFourth.cleaning,
    direct:optionFourth.direct,
  }))

  return (
    <OptionFourthBlock>
      <OptionBody>

        <CheckWrapper>
          <input 
            id="빌트인 제품"
            type="checkbox"
            onClick={e => setBuiltInToggle(!builtInToggle)}
          />
          <label className="title" htmlFor="빌트인 제품">빌트인 제품</label>
          {
            builtInToggle && 
            <InputBox>
              <input
                type='text'
                placeholder='빌트인 제품 입력'
                value={builtIn}
                onChange={(e) => dispatch(changeBuiltIn(e.target.value))}
                
              />
            </InputBox>
          }
        </CheckWrapper>

        <CheckWrapper>
          <input
            id='청소비'
            type="checkbox"
            onClick={e => setCleaningToggle(!cleaningToggle)}
          />
          <label className="title" htmlFor="청소비">청소비</label>
          {
            cleaningToggle && 
            <InputBox>
              <input
                type='text'
                placeholder='청소비 입력'
                value={cleaning}
                onChange={(e) => dispatch(changeCleaning(e.target.value))}
              />
            </InputBox>
          }
        </CheckWrapper>

        <CheckWrapper className='paddingBottomAdd'>
          <input
            id='직접입력'
            type="checkbox"
            onClick={e => setDirectToggle(!directToggle)}
          />
          <label className="title" htmlFor="직접입력">직접입력</label>
          {
            directToggle && 
            <InputBox>
              <input
                type='text'
                placeholder='직접입력'
                value={direct}
                onChange={(e) => dispatch(changeDirect(e.target.value))}
              />
            </InputBox>
          }
        </CheckWrapper>

      </OptionBody>
    </OptionFourthBlock >
  );
};

export default OptionFourth;