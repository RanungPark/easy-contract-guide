import React from 'react';
import { styled } from 'styled-components';
import palette from '../../libs/styles/palette';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { registerResultFailure, registerResultSuccess } from '../../modules/result';
import { changeComment, toggleSwitch } from '../../modules/menu';
import { AiOutlineUp, AiOutlineDown} from "react-icons/ai";

const MenuRegisterResultBlock = styled.div``;

const MenuHeader = styled.div`
  background: #3DA5F5;
  font-weight: bold;
  font-size: 1rem;
  display: flex;
  align-items: center;
  color: white;
  padding: 0.7rem;
  justify-content: space-between;
  margin-top: 1rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`

const MenuBody = styled.div`
  background: ${palette.gray[1]};
  font-weight: bold;
  font-size: 1rem;
  color: ${palette.gray[7]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem;
  height: 5rem;
  border-bottom: 1px solid #3DA5F5;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`

const MenuButton = styled.button`
  font-weight: bold;
  background: #8fc9f5;
  border: 0;
  margin: 0;
  padding: 0.7rem;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  margin-top: 1rem;

  &:hover {
    opacity: 0.8;
  }
`
const MenuRegisterResult = () => {
  const dispatch = useDispatch();
  const {registerMenuResult, contract, registerResult, } = useSelector(({menu, file, result}) => ({
    registerMenuResult : menu.registerMenuResult,
    contract: file.contract,
    registerResult : result.registerResult,
  }))

  const onSubmit = e => {
    e.preventDefault();
    console.log('결과보기');
    const {file} = contract

    const formData = new FormData();
    formData.append('contractId', file.contractId);
    axios.post('http://localhost:8080/result/certifiedcopy', formData)
    .then(function (response) {
      dispatch(
        registerResultSuccess({
          form: 'registerResult',
          key: 'result',
          value: response.data.data
        })
      )
    })
    .catch(function (error) {
      dispatch(
        registerResultFailure({
          form: 'registerResult',
          key: 'result',
          value: error.response.data
        })
      )
    })
  }
  
  const {registerResultToggle} = registerMenuResult;
  const {result} = registerResult;

  const handleClick = (e) => {
    dispatch(
      toggleSwitch({
        form: 'registerMenuResult',
        key: 'registerResultToggle',
        value: !registerResultToggle,
      }))
  }

  let commands
  if(result !== null) {
    commands = result.resultFields.map(item => item);
  }

  return (
    <MenuRegisterResultBlock>
      {registerResult.result === null ? <>
        <form onSubmit={onSubmit}>
          <MenuButton>
            등기부등본과 분석
          </MenuButton>
        </form>
      </> : <>
        <MenuHeader onClick={handleClick}>
          <div>등기부등본과 결과</div>
          {
            registerResultToggle === false ? <AiOutlineDown /> : <AiOutlineUp />
          }
        </MenuHeader>
        {
          registerResultToggle === true  && <>
          <MenuBody onClick={() => 
                dispatch(
                  changeComment({
                    form: 'registerMenuResult',
                    key: 'registerResultComment',
                    value: {
                      comment: '안전도 퍼센트 보기'
                    }
                  }),
                )
              }>
            <div>안전도 퍼센트와 결과 가이드 보기</div>
          </MenuBody>
          {commands.map((command, index) => (
            <>
              <MenuBody onClick={() => 
                dispatch(
                  changeComment({
                    form: 'registerMenuResult',
                    key: 'registerResultComment',
                    value: command,
                  }),
                )
              }>
                <div>등기부등본과 분석 결과 {index + 1}p 보기</div>
              </MenuBody>
            </>
          ))}</>
        }
      </>}
    </MenuRegisterResultBlock >
  );
};

export default MenuRegisterResult;