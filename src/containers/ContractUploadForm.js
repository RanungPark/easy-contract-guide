import React, { useEffect, useState } from 'react';
import UploadForm from '../components/upload/UploadForm';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { contractUploadFileFailure, contractUploadFileSuccess, fixContractId } from '../modules/file';

const ContractUploadForm = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [text, setText] = useState('');
  const [message, setMessage] = useState(false);

  const {contract ,userId} = useSelector(({file}) => 
  ({
    contract: file.contract,
    userId: file.userId,
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
    console.log('서밋함');
    if(!pdfFile) {
      setMessage('Please select an PDF');
      return;
    }

    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('pdfFile', pdfFile);
    axios.post('http://localhost:8080/file/contract', formData ,{
      headers : {
        'Content-Type' : 'multipart/form-data'
      }
    })
    .then(function (response) {
      console.log(response.data);
      dispatch(
        contractUploadFileSuccess({
          form: 'contract',
          key: 'file',
          value: response.data.data
        })
      )
    })
    .catch(function (error) {
      console.log(error.response.data);
      dispatch(
        contractUploadFileFailure({
          form: 'contract',
          key: 'file',
          value: error.response.data
        })
      )
    })
  }

  useEffect(() => {
    const {file, error} = contract
    if(error) {
      setMessage(error.responseMessage);
      return;
    }
    if(file) {
      dispatch(
        fixContractId(file.contractId)
      )
      setMessage(`File upload completed`);
    }
  },[contract, dispatch]);

  return (
    <UploadForm
      type = 'contract' 
      onChange = {onChange}
      onSubmit = {onSubmit}
      text = {text}
      message = {message}
    />
  );
};

export default ContractUploadForm;