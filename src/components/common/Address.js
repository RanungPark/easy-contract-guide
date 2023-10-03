import React from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { postcodeScriptUrl } from 'react-daum-postcode/lib/loadPostcode';
import styled from 'styled-components';

const AddressDiv = styled.div`
  width: 100%;
  cursor: pointer;
`

const Address = ({handleChnageAddress, address}) => {
  const open = useDaumPostcodePopup(postcodeScriptUrl);

  const handleComplete = (data) => {
    let fullAddress
    if(data.buildingName === '') {
      fullAddress = data.roadAddress
    } else {
      fullAddress = data.roadAddress + ' (' + data.buildingName + ')';
    }
    
    handleChnageAddress(fullAddress);
  }

  const handleClick = () => {
  	open({onComplete: handleComplete});
  }

  return (
    <>
      {
        address === '' ? <> 
          <AddressDiv onClick={handleClick} className='placeholder'>클릭하여 주소를 검색해주세요</AddressDiv>
          </> : <AddressDiv onClick={handleClick}>{address}</AddressDiv>
      }
    </>
  );
};

export default Address;