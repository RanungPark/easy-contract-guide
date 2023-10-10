import React from 'react';
import { styled } from 'styled-components';
import palette from '../../libs/styles/palette';
import { useSelector } from 'react-redux';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import PieChartForm from '../comment/PieChartForm';

const BuildingViewBlock = styled.div`
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
    width: 100%; 
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

const BuildingView = () => {
  const {contractMenu, buildingMenu, buildingMenuResult,} = useSelector(({menu}) => ({
    contractMenu : menu.contractMenu,
    buildingMenu : menu.buildingMenu,
    buildingMenuResult : menu.buildingMenuResult,
  }))

  
  const {contractImgUrl} = contractMenu;
  const {buildingImgUrl} = buildingMenu;
  const {buildingResultComment} = buildingMenuResult;
  const {comment} = buildingResultComment

  return (
    <BuildingViewBlock>
      <BodyCombine>
        {
          contractImgUrl === '' ? <>
            <BodyFirst>
              <Note>
                메뉴에서 임대차계약서 파일을 선택해주세요
              </Note>
            </BodyFirst>
          </> : <>
            <BodyFirst>
              <TransformWrapper initialScale={1} minScale={1} maxScale={3}>
                <TransformComponent>
                  <figure>
                    <img src={contractImgUrl} alt='contract_Image' />
                  </figure>
                </TransformComponent>
              </TransformWrapper>
            </BodyFirst>
          </>
        }
        
        {
          buildingImgUrl === '' ? <>
          <BodyFirst>
              <Note>
                메뉴에서 건축물대장 파일을 선택해주세요
              </Note>
            </BodyFirst>
          </> : <>
            <BodySecond>
              <TransformWrapper initialScale={1} minScale={1} maxScale={3}>
                  <TransformComponent>
                    <figure>
                      <img src={buildingImgUrl} alt='building_Image' />
                    </figure>
                  </TransformComponent>
                </TransformWrapper>
            </BodySecond>
          </>
        }
      </BodyCombine>
      
      {
        buildingResultComment === '' ? <>
          <BodyThird  className='note'>
            <Note>
              메뉴에서 등기부등본과 분석후 파일을 선택해주세요
            </Note>
          </BodyThird>
        </> : (
            comment === '안전도 퍼센트 보기' ? <BodyThird className=''>
              <PieChartForm type={"building"}/>
                <Comment>
                <b>건축물대장 분석</b><br/><br/>
                임대차계약서의 주소와 건축물대장의 주소가 정확히 일치하는지 확인<br/><br/>
                임대차계약서의 임대인과 건축물대장의 소유자 현황이 일치하는지 확인<br/><br/>
                건축물대장의 소유권 지분을 확인하여 올바른 임대인과 계약이 이루어지고 있는지 확인<br/><br/>
                </Comment>
            </BodyThird> : <BodyThird>
              <Comment dangerouslySetInnerHTML={ {__html: comment} } />
            </BodyThird>
          )
      }
    </BuildingViewBlock >
  );
};

export default BuildingView;