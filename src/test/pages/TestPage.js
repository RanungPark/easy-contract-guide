import React, { useState } from 'react';
// import DousTemplate from '../../components/docs/DousTemplate';
import DaumPost from '../components/DaumPost';
// import ImgScannerForm from '../components/ImgScannerForm';

const TestPage = () => {
  const [addressObj, setAddressObj] = useState({
    fullAddress: '',
  })
  return (
    <div>
      <DaumPost  setAddressObj={setAddressObj} />
      <div>
      지역주소 : {addressObj.fullAddress}
      </div>
    </div>
  );
};

export default TestPage;