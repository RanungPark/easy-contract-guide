import React from 'react';
import { styled } from 'styled-components';
import palette from '../../libs/styles/palette';
import { useSelector } from 'react-redux';

const ArticleBlock = styled.div`
`

const ArticleWrapper = styled.div`
  .header {
    font-size: 1.05rem;
    font-weight: bold;
    color: black;
    margin-bottom: 0.5rem;
  }

  .smHeader {
    font-size: 0.85rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: black;
  }

  .special {
    color: #ef6681;
  } 
  margin-top: 2rem;
  margin-left: 4rem;
  margin-right: 4rem;
  font-size: 0.95rem;
  color: ${palette.gray[7]};
`

const Empty = styled.div`
  width: 2rem;
  display: inline-block;
  border-bottom: 1px solid #868e96;

  &.special {
    width: 100%;
    border-bottom: 1px dotted #868e96;
    height: 0.95rem;
  }
`


const Article = () => {
  const {
    hostType,
    tenantType,
    type,
    startDay,
    endDay,
    builtIn,
    cleaning,
    direct
    } = useSelector(({optionFirst, optionSecond, optionFourth}) => ({
        hostType: optionFirst.hostType,
        tenantType: optionFirst.tenantType,
        type: optionSecond.type,
        startDay: optionSecond.startDay,
        endDay: optionSecond.endDay,
        builtIn:optionFourth.builtIn,
        cleaning:optionFourth.cleaning,
        direct:optionFourth.direct,
      }))

  return (
    <ArticleBlock>
      { type !== '' ? <>
        <ArticleWrapper>
          <div className='header'>
            제 1조 (목적) 
          </div>
          위 부동산의 임대차에 대하여 합의에 따라 임차인은 임대인에게 임차 보증금 및 차임을 (계약내용)과 같이 지급하기로 한다.
        </ArticleWrapper>
        
        <ArticleWrapper>
          <div className='header'>
            제 2조 (존속기간) 
          </div>
          임대인은 위 부동산을 임대차 목적대로 사용⋅수익할 수 있는 상태로
          { startDay !== '' ? <span> {startDay} </span> : 
          <span> <Empty/>년<Empty/>월<Empty/>일</span>
          }
          까지 임차인에게 인도하며, 인대차 기간은 인도일로부터
          { endDay !== '' ? <span> {endDay} </span> : 
          <span> <Empty/>년<Empty/>월<Empty/>일</span>
          }
          까지 한다.
        </ArticleWrapper>
      </> : <></>}

      { hostType !== '' || tenantType !== '' ? <>
        <ArticleWrapper>
          <div className='header'>
            제 3조 (용도변경 및 전대 등)
          </div>
          임대인은 임대인의 동이없이 위 부동산의 용도나 구조를 변경하거나 전대⋅임차권 양도 또는 담보제공을 하지 못하며 임대차 목적 이외의 용도로 사용할 수 없다.
        </ArticleWrapper>

        <ArticleWrapper>
          <div className='header'>
            제 4조 (계약의 해지)
          </div>
          임차인이 제3조를 위반하였을 때 임대인은 즉시 본 계약을 해지 할 수 있다.
        </ArticleWrapper>

        <ArticleWrapper>
          <div className='header'>
            제 5조 (계약의 종료)
          </div>
          임대차계약이 종료된 경우에 임차인은 위 부동산을 원상으로 회복하여 임대인에게 반환한다. 이러한 경우 임대인은 보증금을 임차인에게 반환하고, 연체 차임 및 관리비 또는 손해배상금이 있을 때는 이들을 전하고 그 잔액을 반환한다.
        </ArticleWrapper>

        <ArticleWrapper>
          <div className='header'>
            제 6조 (계약의 해제)
          </div>
          임차인이 임대인에게 중도금(중도금이 없을 때는 잔금)을 지불하기 전까지, 임대인은 계약금의 배액을 상환하고, 임차인은 계약금을 포기하고 본 계약을 해제할 수 있다.
        </ArticleWrapper>

        <ArticleWrapper>
          <div className='header'>
            제 7조 (채무불이행과 손해배상)
          </div>
          임대인 또는 임차인이 본 계약상의 내용에 대하여 불이행이 있을 경우 그 상대방은 불이행한 자에 대하여 
        </ArticleWrapper>

        <ArticleWrapper>
          <div className='header'>
            제 8조 (중개보수)
          </div>
          개인 공인중개사는 임대인과 임차인이 본 계약을 불이행함으로 인한 책임을 지지 않는다. 또한, 중개보수는 본 계약체결과 동시에 계약 당사자 쌍방이 각각 지불하며, 개업공인 중개사의 고의나 과실 없이 본 계약이 무효⋅취소 또는 해제되어도 중개보수는 지급한다. 공동중개경우에 임대인과 임차인은 자신이 중개 의뢰한 개업공인중개사에게 각각 중개보수를 지급한다.(중개보수는 거래가액의 <Empty />%로 한다.)
        </ArticleWrapper>

        <ArticleWrapper>
          <div className='header'>
            제 9조 (중개대상물확인 설명서 교부 등)
          </div>
          개업공인중개사는 중개대상물 확인⋅설명서를 작성하고 업무보증관계증서(공제증서 등) 사본을 첨부하여 계약 체결과 동시에 거래당사자 쌍방에 교부한다
        </ArticleWrapper>
      </> : <></>}
   
      { builtIn !== '' || cleaning !== '' || direct !== ''  ? <>
        <ArticleWrapper >
          <div className='header'>
            특약사항
          </div>
          <div className='special'>
            임차인은 위 부동산에 존재하는 선 순위 권리(근저당권, 임차 등)로 인하여 경매 등이 실행될 경우 임차 보증금의 전부 또는 일부를 반환받지 못할 수도 있음을 확인한다.
          </div>
          { builtIn !== '' && <>
            <div className='smHeader'>
              빌트인 제품
            </div>
            <div>
              {builtIn}
            </div>
          </>}
          { cleaning !== '' && <>
            <div className='smHeader'>
              청소비
            </div>
            <div>
              {cleaning}
            </div>
          </>}
          { direct !== '' && <>
            <div className='smHeader'>
              기타
            </div>
            <div>
              {direct}
            </div>
          </>}
        </ArticleWrapper>
      </> : <></>}
      
    </ArticleBlock >
  );
};

export default Article;