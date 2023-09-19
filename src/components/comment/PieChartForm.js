import React from 'react';
import { styled } from 'styled-components';
import { PieChart } from 'react-minimal-pie-chart';
import { useSelector } from 'react-redux';
import { HiSpeakerphone } from "react-icons/hi";
import palette from '../../libs/styles/palette';

const PieChartFormBlock = styled.div`
  width: 100%;
  height: 15rem;
  flex-direction:column;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PieChartHeader = styled.div`
  font-weight: 800;
  font-size: 1.125rem;
  color: ${palette.cyan[5]};
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

const PieChartForm = () => {
  const {user, contractResult} = useSelector(({user, result})=>({
    user: user.user,
    contractResult: result.contractResult,
  }));

  const {result} = contractResult;


  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();

  return (
    <PieChartFormBlock>
      <PieChartHeader>
       {user.username}님의 안전도 퍼센트
      </PieChartHeader>
      <PieChartComment>
      <HiSpeakerphone/> {year}년 {month}월 {date}일 기준으로 안전도 퍼센트,<br/>
      언제든지 변경 될 수 있기 때문에 주기적인 확인이 필요해요.
      </PieChartComment>
      <PieChartWrapper>
        <PieChart
          data={[
            {
            value: result.rate,
            color: '#3bc9db',
            name: 'name1',
            },
          ]}
          reveal={result.rate}
          lineWidth={18}
          background='#dee2e6'
          rounded
          animate
          label={({dataEntry}) => dataEntry.value + '%'}
          labelStyle={{
          fontSize: "26px",
          fill: "#33333"
          }}
          labelPosition={0}
        />
      </PieChartWrapper>
    </PieChartFormBlock >
  );
};

export default PieChartForm;