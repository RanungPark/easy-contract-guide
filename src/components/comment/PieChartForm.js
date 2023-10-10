import React from 'react';
import { styled } from 'styled-components';
import { PieChart } from 'react-minimal-pie-chart';
import { useSelector } from 'react-redux';
import { HiSpeakerphone } from "react-icons/hi";
import palette from '../../libs/styles/palette';

const PieChartFormBlock = styled.div`
  width: 50%;
  height: 100%;
  flex-direction:column;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PieChartHeader = styled.div`
  font-weight: 800;
  font-size: 1.125rem;
  color: #3DA5F5;
  margin-bottom: 1rem;
`
const PieChartComment = styled.div`
  font-size: 0.8rem;
  color: ${palette.gray[6]};
`

const PieChartWrapper = styled.div`
  width: 12rem;
  height: 12rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

const PieChartForm = ({type}) => {
  const {user, contractResult, registerResult, buildingResult} = useSelector(({user, result})=>({
    user: user.user,
    contractResult: result.contractResult,
    registerResult: result.registerResult,
    buildingResult: result.buildingResult,
  }));

  const contract_result = contractResult.result;
  const register_result = registerResult.result;
  const building_result = buildingResult.result;


  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();

  return (
    <PieChartFormBlock>
      {
        type === 'standard' ? <>
          <PieChartHeader>
            {user.username}님의 표준계약서와의 안전도 퍼센트
          </PieChartHeader>
          <PieChartComment>
            <HiSpeakerphone/> {year}년 {month}월 {date}일 기준으로 안전도 퍼센트,<br/>
            언제든지 변경 될 수 있기 때문에 주기적인 확인이 필요해요.
          </PieChartComment>
          <PieChartWrapper>
            <PieChart
              data={[
                {
                value: contract_result.rate,
                color: '#8fc9f5',
                name: 'name1',
                },
              ]}
              reveal={contract_result.rate}
              lineWidth={18}
              background='#dee2e6'
              rounded
              animate
              startAngle={-90}
              label={({dataEntry}) => dataEntry.value + '%'}
              labelStyle={{
              fontSize: "26px",
              fill: "#33333"
              }}
              labelPosition={0}
            />
          </PieChartWrapper>
        </> : (
          type === 'register' ? <>
            <PieChartHeader>
              {user.username}님의 등기부등본과의 안전도 퍼센트
            </PieChartHeader>
            <PieChartComment>
              <HiSpeakerphone/> {year}년 {month}월 {date}일 기준으로 안전도 퍼센트,<br/>
              언제든지 변경 될 수 있기 때문에 주기적인 확인이 필요해요.
            </PieChartComment>
            <PieChartWrapper>
              <PieChart
                data={[
                  {
                  value: register_result.rate,
                  color: '#8fc9f5',
                  name: 'name1',
                  },
                ]}
                reveal={register_result.rate}
                lineWidth={18}
                background='#dee2e6'
                rounded
                animate
                startAngle={-90}
                label={({dataEntry}) => dataEntry.value + '%'}
                labelStyle={{
                fontSize: "26px",
                fill: "#33333"
                }}
                labelPosition={0}
              />
            </PieChartWrapper>
          </> : (
            type === 'building' ? <>
            <PieChartHeader>
              {user.username}님의 건축물대장과의 안전도 퍼센트
            </PieChartHeader>
            <PieChartComment>
              <HiSpeakerphone/> {year}년 {month}월 {date}일 기준으로 안전도 퍼센트,<br/>
              언제든지 변경 될 수 있기 때문에 주기적인 확인이 필요해요.
            </PieChartComment>
            <PieChartWrapper>
              <PieChart
                data={[
                  {
                  value: building_result.rate,
                  color: '#8fc9f5',
                  name: 'name1',
                  },
                ]}
                reveal={building_result.rate}
                lineWidth={18}
                background='#dee2e6'
                rounded
                animate
                startAngle={-90}
                label={({dataEntry}) => dataEntry.value + '%'}
                labelStyle={{
                fontSize: "26px",
                fill: "#33333"
                }}
                labelPosition={0}
              />
            </PieChartWrapper>
          </> : <></>
          )
        )
      }
    </PieChartFormBlock >
  );
};

export default PieChartForm;