import React from 'react';
import { styled } from 'styled-components';
import palette from '../../libs/styles/palette';
import { useSelector } from 'react-redux';

const RealEstateBlock = styled.div`
  margin-left: 4rem;
  margin-right: 4rem;
  margin-top:0.5rem;
`;

const RealEstateTableHeader = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.5rem;
  background: #8fc9f5;
  width: 100%;
  height:6vh;
  display: flex;
  padding-left: 1rem;
  margin-bottom: 0;
  flex-direction: column;
  justify-content:center;

  .note {
    font-size: 0.75rem;
    opacity: 0.8;
  }
`

const RealEstateTableBody = styled.div`
  display: flex;
  margin-top:0;
`

const RealEstateTableBodyLeft = styled.div`
  background: #3DA5F5;
  color: white;
  display:flex;
  justify-content: center;
  align-items: center;
  width: 6vw;
  min-height:4vh;
  white-space: pre-wrap;
  margin:0;
  font-weight: bold;
`
const RealEstateTableBodyRight = styled.div`
  display:flex;
  white-space: pre-wrap;
  margin:0;
  width: 100%;
  align-items:center;
  color: ${palette.gray[7]};
  border-bottom : 1px solid #3DA5F5;
  border-right : 1px solid #3DA5F5;
  font-weight: bold;
  font-size: 0.95rem;
  min-height:4vh;
  padding-right: 1rem;

  &.rowReverse {
    flex-direction: row-reverse;
  }

  .flex1 {
    flex : 1;
  }
`
const BodyType = styled.div`
  min-width: 3vw;
  background: #f9fcfe;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #3DA5F5;
  border-left: 1px solid #3DA5F5;

  &.leftnone {
    border-left: 0;
  }

  .fontChange {
    font-size: 0.75rem;
  }
`

const Bodyleft = styled.div`
  width: 50%;
  display: flex;
  word-break:break-all;
  padding-right: 1rem;
  height: 100%;

  div {
    display: flex;
    align-items: center;
  }
`

const BodyRight = styled.div`
  width: 50%;
  display: flex; 
  word-break:break-all;
  height: 100%;

  div {
    display: flex;
    align-items: center;
  }
`

const RealEstate = () => {
  const {
    address,
    restAddress, 
    landUse, 
    landUseArea, 
    buildingUse, 
    buildingUseArea,
    rentableSpace, 
    rentableSpaceArea
    } = useSelector(({optionFifth}) => ({
      address: optionFifth.address,
      restAddress: optionFifth.restAddress,
      landUse: optionFifth.landUse,
      landUseArea: optionFifth.landUseArea,
      buildingUse: optionFifth.buildingUse,
      buildingUseArea: optionFifth.buildingUseArea,
      rentableSpace: optionFifth.rentableSpace,
      rentableSpaceArea: optionFifth.rentableSpaceArea,
      }))

  return (
    <RealEstateBlock>
      
      { address !== '' ||
        restAddress !== '' ||
        landUse !== '' ||
        landUseArea !== '' ||
        buildingUse !== '' ||
        buildingUseArea !== '' ||
        rentableSpace !== '' ||
        rentableSpaceArea !== '' ? <>
        <RealEstateTableHeader>
          <div className='note'>
            임대인과 임차인 쌍방은 아래 표시 부동산에 관하여 다음 계약내용과 같이 임대차계약을 체결한다.
          </div>
          <div>
            1. 부동산의 표시
          </div>
        </RealEstateTableHeader>
      </> : <></> }

      { address !== '' || restAddress !== '' ? <>
        <RealEstateTableBody>
          <RealEstateTableBodyLeft>
            <div>소 제  지</div>
          </RealEstateTableBodyLeft>
          <RealEstateTableBodyRight className='rowReverse'>
            {address} {restAddress}
          </RealEstateTableBodyRight>
        </RealEstateTableBody>
      </> : <></> }

      { landUse !== '' || landUseArea !== '' ? <>
        <RealEstateTableBody>
          <RealEstateTableBodyLeft>
            <div>토       지</div>
          </RealEstateTableBodyLeft>
          <RealEstateTableBodyRight >
            <Bodyleft>
              <BodyType className='leftnone'>
                <div>용도</div>
              </BodyType>
              <div className='flex1'>
                {landUse}
              </div>
            </Bodyleft>
            <BodyRight>
              <BodyType>
                <div>면 적</div>
              </BodyType>
              <div className='flex1'>
                {landUseArea}m²
              </div>
            </BodyRight>
          </RealEstateTableBodyRight>
        </RealEstateTableBody>
      </> : <></>}

      { buildingUse !== '' || buildingUseArea !== '' ? <>
        <RealEstateTableBody>
          <RealEstateTableBodyLeft>
            <div>건       물</div>
          </RealEstateTableBodyLeft>
          <RealEstateTableBodyRight>
            <Bodyleft>
              <BodyType className='leftnone'>
                <div className='fontChange'>구조⋅용도</div>
              </BodyType>
              <div className='flex1'>
                {buildingUse}
              </div>
            </Bodyleft>
            <BodyRight>
              <BodyType>
                <div>면 적</div>
              </BodyType>
              <div className='flex1'>
                {buildingUseArea}m²
              </div>
            </BodyRight>
          </RealEstateTableBodyRight>
        </RealEstateTableBody>
      </> : <></>}

      { rentableSpace !== '' || rentableSpaceArea !== '' ? <>
        <RealEstateTableBody>
          <RealEstateTableBodyLeft>
            <div>임대할부분</div>
          </RealEstateTableBodyLeft>
          <RealEstateTableBodyRight>
            <Bodyleft>
              <BodyType className='leftnone'>
                <div>용도</div>
              </BodyType>
              <div className='flex1'>
                {rentableSpace}
              </div>
            </Bodyleft>
            <BodyRight>
              <BodyType>
                <div>면 적</div>
              </BodyType>
              <div className='flex1'>
                {rentableSpaceArea}m²
              </div>
            </BodyRight>
          </RealEstateTableBodyRight>
        </RealEstateTableBody>
      </> : <></>}
      
    </RealEstateBlock >
  );
};

export default RealEstate;