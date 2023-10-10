import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import palette from '../../libs/styles/palette';
import { buildingResultFailure, buildingResultSuccess } from '../../modules/result';
import axios from 'axios';
import { changeComment, toggleSwitch } from '../../modules/menu';
import { AiOutlineUp, AiOutlineDown} from "react-icons/ai";

const MenuBuildingResultBlock = styled.div``;

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

const MenuBuildingResult = () => {
  const dispatch = useDispatch();
  const {buildingMenuResult, contract, buildingResult, } = useSelector(({menu, file, result}) => ({
    buildingMenuResult : menu.buildingMenuResult,
    contract: file.contract,
    buildingResult : result.buildingResult,
  }))

  const onSubmit = e => {
    e.preventDefault();
    console.log('결과보기');
    const {file} = contract

    const formData = new FormData();
    formData.append('contractId', file.contractId);
    axios.post('http://localhost:8080/result/building-register', formData)
    .then(function (response) {
      dispatch(
        buildingResultSuccess({
          form: 'buildingResult',
          key: 'result',
          value: response.data.data
        })
      )
    })
    .catch(function (error) {
      dispatch(
        buildingResultFailure({
          form: 'buildingResult',
          key: 'result',
          value: error.response.data
        })
      )
    })
  }

  const {buildingResultToggle} = buildingMenuResult;
  const {result} = buildingResult;

  const handleClick = (e) => {
    dispatch(
      toggleSwitch({
        form: 'buildingMenuResult',
        key: 'buildingResultToggle',
        value: !buildingResultToggle,
      }))
  }

  let commands
  if(result !== null) {
    commands = result.resultFields.map(item => item);
  }

  return (
    <MenuBuildingResultBlock>
      {buildingResult.result === null ? <>
        <form onSubmit={onSubmit}>
          <MenuButton>
            건축물대장과 분석
          </MenuButton>
        </form>
      </> : <>
        <MenuHeader onClick={handleClick}>
          <div>건축물대장과 결과</div>
          {
            buildingResultToggle === false ? <AiOutlineDown /> : <AiOutlineUp />
          }
        </MenuHeader>
        {
          buildingResultToggle === true  && <>
          <MenuBody onClick={() => 
                dispatch(
                  changeComment({
                    form: 'buildingMenuResult',
                    key: 'buildingResultComment',
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
                    form: 'buildingMenuResult',
                    key: 'buildingResultComment',
                    value: command,
                  }),
                )
              }>
                <div>건축물대장과 분석 결과 {index + 1}p 보기</div>
              </MenuBody>
            </>
          ))}</>
        }
      </>}
    </MenuBuildingResultBlock >
  );
};

export default MenuBuildingResult;