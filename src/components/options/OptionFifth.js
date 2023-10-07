import React, { useState } from 'react';
import { styled } from 'styled-components';
import palette from '../../libs/styles/palette';
import Address from '../common/Address';
import { useDispatch, useSelector } from 'react-redux';
import { changeAddress, changeBuildingUse, changeBuildingUseArea, changeLandUse, changeLandUseArea, changeRentableSpace, changeRentableSpaceArea, changeRestAddress } from '../../modules/optionFifth';

const OptionFifthBlock = styled.div``;

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

  span {
    padding-right:0.5rem;
    display: inline-block;
  }
`

const AddressWrapper = styled.div`
  padding: 0.7rem;
  padding-bottom: 0;
`

const AddresBox = styled.div`
  margin-top: 0.7rem;
  background: white;
  border: 0.5px solid #3DA5F5;
  border-radius: 25px;
  font-size: 1rem;
  height: 2.4rem;
  display: flex;
  align-items:center;
  padding: 0.5rem;
  color: ${palette.gray[7]};

  .placeholder {
    color: #a0a0a0;
    font-size: 0.9rem;
  }
`

const OptionFifth = () => {
  const [address, setAddress] = useState('');
  const [landUseToggle, setLandUseToggle] = useState(false);
  const [buildingUseToggle, setBuildingUseToggle] = useState(false);
  const [rentableSpaceToggle, setRentableSpaceToggle] = useState(false);

  const dispatch = useDispatch();
  const {
    restAddress, 
    landUse, 
    landUseArea, 
    buildingUse, 
    buildingUseArea, 
    rentableSpace, 
    rentableSpaceArea
    } = useSelector(({optionFifth}) => ({
      restAddress: optionFifth.restAddress,
      landUse: optionFifth.landUse,
      landUseArea: optionFifth.landUseArea,
      buildingUse: optionFifth.buildingUse,
      buildingUseArea: optionFifth.buildingUseArea,
      rentableSpace: optionFifth.rentableSpace,
      rentableSpaceArea: optionFifth.rentableSpaceArea,
      }))

  const handleChnageAddress = (fullAddress) => {
    setAddress(fullAddress)
    dispatch(changeAddress(fullAddress))
  }

  return (
    <OptionFifthBlock>
      <OptionBody>
        
        <AddressWrapper>
          <div className='title'>소재지</div>
          <AddresBox >
            <Address handleChnageAddress={handleChnageAddress} address={address}/>
          </AddresBox>
          <InputBox>
            <input
              type='text'
              placeholder='상세주소를 입력해주세요'
              value={restAddress}
              onChange={(e) => dispatch(changeRestAddress(e.target.value))}
            />
          </InputBox>
        </AddressWrapper>

        <CheckWrapper>
          <input 
            id='토지용도'
            type="checkbox"
            onClick={() => setLandUseToggle(!landUseToggle)}
          />
          <label className="title" htmlFor="토지용도">토지용도</label>
          {
            landUseToggle &&
            <>
              <InputBox>
                <input
                  type='text'
                  placeholder='토지용도 입력'
                  value={landUse}
                  onChange={(e) => dispatch(changeLandUse(e.target.value))}
                />
              </InputBox>
              <InputBox>
                <label htmlFor='토지용도 면적 입력'>면적</label>
                <input
                  id='토지용도 면적 입력'
                  type='text'
                  placeholder='토지용도 면적 입력'
                  value={landUseArea}
                  onChange={e =>{ 
                    const value = e.target.value;
                    const filteredValue = value.replace(/[^0-9]/g, '');
                    dispatch(changeLandUseArea(filteredValue))
                  }}
                />
                <span>m²</span>
              </InputBox>
            </>
          }
        </CheckWrapper>

        <CheckWrapper>
          <input
            id='건물 구조⋅용도'
            type="checkbox"
            onClick={() => setBuildingUseToggle(!buildingUseToggle)}
          />
          <label className="title" htmlFor="건물 구조⋅용도">건물 구조⋅용도</label>
          {
            buildingUseToggle &&
            <>
              <InputBox>
                <input
                  type='text'
                  placeholder='건물 구조⋅용도 입력'
                  value={buildingUse}
                  onChange={(e) => dispatch(changeBuildingUse(e.target.value))}
                />
              </InputBox>
              <InputBox>
                <label htmlFor='건물 구조⋅용도 면적 입력'>면적</label>
                <input
                  id='건물 구조⋅용도 면적 입력'
                  type='text'
                  placeholder='건물 구조⋅용도 면적 입력'
                  value={buildingUseArea}
                  onChange={e =>{ 
                    const value = e.target.value;
                    const filteredValue = value.replace(/[^0-9]/g, '');
                    dispatch(changeBuildingUseArea(filteredValue))
                  }}
                />
                <span>m²</span>
              </InputBox>
            </>
          }
        </CheckWrapper>

        <CheckWrapper className='paddingBottomAdd'>
          <input 
          id='임대할 부분'
          type="checkbox"
          onClick={() => setRentableSpaceToggle(!rentableSpaceToggle)}
          />
          <label className="title" htmlFor="임대할 부분">임대할 부분</label>
          {
            rentableSpaceToggle &&
            <>
              <InputBox>
                <input
                  type='text'
                  placeholder='임대할 부분 입력'
                  value={rentableSpace}
                  onChange={(e) => dispatch(changeRentableSpace(e.target.value))}
                />
              </InputBox>
              <InputBox>
                <label htmlFor='임대할 부분 면적 입력'>면적</label>
                <input
                  id='임대할 부분 면적 입력'
                  type='text'
                  placeholder='임대할 부분 면적 입력'
                  value={rentableSpaceArea}
                  onChange={e =>{ 
                    const value = e.target.value;
                    const filteredValue = value.replace(/[^0-9]/g, '');
                    dispatch(changeRentableSpaceArea(filteredValue))
                  }}
                />
                <span>m²</span>
              </InputBox>
            </>
          }
        </CheckWrapper>

      </OptionBody>
    </OptionFifthBlock >
  );
};

export default OptionFifth;