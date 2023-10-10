import React from 'react';
import { styled } from 'styled-components';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import { useSelector } from 'react-redux';
import PieChartForm from '../comment/PieChartForm';
import palette from '../../libs/styles/palette';

const StandardViewBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 2rem;
`;

const BodyCombine = styled.div`
  width: 100%;
  height:60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const BodyFirst = styled.div`
  background: white;
  width: 50%;
  height:100%;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 50%;
    width: 50%; 
  }

  figure {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const BodySecond = styled.div`
  background: white;
  width: 50%;
  height:100%;
  margin-left: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 50%;
    width: 50%; 
  }

  figure {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const BodyThird = styled.div`
  width: 100;
  height:40%;
  background: white;
  display: flex;
  margin-top: 2rem;
  overflow: scroll;

  &.note {
    justify-content: center;
    align-items: center;
  }

  &.savePercent{
    align-items: center;
    justify-content: space-between;
  }

  &::-webkit-scrollbar {
    display:none;
  }

  & {
  -ms-overflow-style: none;
  scrollbar-width: none;
  }
`

const Comment = styled.div`
  font-size: 1rem;
  margin: 1rem;
  white-space: pre-wrap;
  

  span {
    color: #ef6681;
    font-weight: 800;
  }

  b {
    font-size: 1.25rem;
    color: #3DA5F5;
  }
`

const Note = styled.div`
  color: ${palette.gray[6]};
  font-size: 1.125rem;
`


const StandardView = () => {
  const {standardMenu, contractMenu, standardMenuResult,} = useSelector(({menu}) => ({
    standardMenu : menu.standardMenu,
    contractMenu : menu.contractMenu,
    standardMenuResult : menu.standardMenuResult,
  }))

  const {standardImgUrl} = standardMenu;
  const {contractImgUrl} = contractMenu;
  const {standardResultComment} = standardMenuResult;
  const {comment} = standardResultComment


  return (
    <StandardViewBlock>
      <BodyCombine>
        {
          standardImgUrl === '' ? <>
            <BodyFirst>
              <Note>
                메뉴에서 표준계약서 파일을 선택해주세요
              </Note>
            </BodyFirst>
          </> : <>
            <BodyFirst>
              <TransformWrapper initialScale={1} minScale={1} maxScale={3}>
                <TransformComponent>
                  <figure>
                    <img src={standardImgUrl} alt='standard_Image' />
                  </figure>
                </TransformComponent>
              </TransformWrapper>
            </BodyFirst>
          </>
        }
        
        {
          contractImgUrl === '' ? <>
          <BodyFirst>
              <Note>
                메뉴에서 임대차계약서 파일을 선택해주세요
              </Note>
            </BodyFirst>
          </> : <>
            <BodySecond>
              <TransformWrapper initialScale={1} minScale={1} maxScale={3}>
                  <TransformComponent>
                    <figure>
                      <img src={contractImgUrl} alt='contract_Image' />
                    </figure>
                  </TransformComponent>
                </TransformWrapper>
            </BodySecond>
          </>
        }
      </BodyCombine>
      
      {
        standardResultComment === '' ? <>
          <BodyThird  className='note'>
            <Note>
              메뉴에서 표준계약서와 분석후 파일을 선택해주세요
            </Note>
          </BodyThird>
        </> : (
            comment === '안전도 퍼센트 보기' ? <BodyThird className=''>
              <PieChartForm type={'standard'}/>
                <Comment>
                <b>표준 계약서 분석법</b>
                <br/><br/>
                임대하고자 하는 부동산의 소유주와 거래자인 집주인과 일치하는지 확인
                <br/><br/>
                특약 사항을 확인하여 수리에 관한 협의를 마쳤는지 확인
                <br/><br/>
                건물의 구조,용도와 보증금을 확인하여 사기 피해 우려가 있는지 확인
                </Comment>
            </BodyThird> : <BodyThird>
              <Comment dangerouslySetInnerHTML={ {__html: comment} } />
            </BodyThird>
          )
      }
    </StandardViewBlock >
  );
};

export default StandardView;