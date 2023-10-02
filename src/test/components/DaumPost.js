import React from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { postcodeScriptUrl } from 'react-daum-postcode/lib/loadPostcode';

const DaumPost = ({setAddressObj}) => {
  const open = useDaumPostcodePopup(postcodeScriptUrl);

  const handleComplete = (data) => {
    const fullAddress = data.roadAddress + ' (' + data.buildingName + ')'
      setAddressObj({
        fullAddress: fullAddress,
      });    
  }
  const handleClick = () => {
  	open({onComplete: handleComplete});
  }

  return (
    <div>
      <button type="button" onClick={handleClick}>주소찾기</button>
    </div>
  );
};

export default DaumPost;