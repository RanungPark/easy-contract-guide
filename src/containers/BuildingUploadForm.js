import React, { useEffect, useState } from 'react';
import UploadForm from '../components/upload/UploadForm';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { buildingUploadFileFailure, buildingUploadFileSuccess} from '../modules/file';

const BuildingUploadForm = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [text, setText] = useState('');
  const [message, setMessage] = useState(false);

  const {building ,contract} = useSelector(({file}) => 
  ({
    building: file.building,
    contract: file.contract,
   }))
  const dispatch = useDispatch();

  const onChange = e => {
    const file = e.target.files[0];
    setPdfFile(file);
    setText(file.name)
    setMessage(false)
    console.log(file);
  };

  const onSubmit = e => {
    e.preventDefault();
    const {file} = contract

    console.log('서밋함');
    if(!pdfFile) {
      setMessage('Please select an PDF');
      return;
    }

    const formData = new FormData();
    formData.append('contractId', file.contractId);
    formData.append('pdfFile', pdfFile);
    axios.post('http://localhost:8080/file/building-register', formData ,{
      headers : {
        'Content-Type' : 'multipart/form-data'
      }
    })
    .then(function (response) {
      console.log(response.data);
      dispatch(
        buildingUploadFileSuccess({
          form: 'building',
          key: 'file',
          value: response.data.data
        })
      )
    })
    .catch(function (error) {
      console.log(error.response.data);
      dispatch(
        buildingUploadFileFailure({
          form: 'building',
          key: 'file',
          value: error.response.data
        })
      )
    })
  }

  useEffect(() => {
    const {error} = building
    if(error) {
      setMessage(error.responseMessage);
      return;
    }
  },[building]);

  return (
    <UploadForm
      type = 'building' 
      onChange = {onChange}
      onSubmit = {onSubmit}
      text = {text}
      message = {message}
    />
  );
};

export default BuildingUploadForm;