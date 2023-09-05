import React, { useState } from 'react';
import UploadForm from '../components/upload/UploadForm';
import axios from 'axios';

const RegisterUploadForm = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [text, setText] = useState('');
  const [message, setMessage] = useState(false);
  const contractId = 1;

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
    formData.append('contractId', contractId);
    formData.append('pdfFile', pdfFile);
    axios.post('http://localhost:8080/file/certifiedcopy', formData ,{
      headers : {
        'Content-Type' : 'multipart/form-data'
      }
    })
    .then(function (response) {
      console.log(response.data);
      setMessage(`File upload completed`);
    })
    .catch(function (error) {
      console.log(error.response.data);
      setMessage(error.response.data.responseMessage)
    })
  }

  return (
    <UploadForm
      type = 'register' 
      onChange = {onChange}
      onSubmit = {onSubmit}
      text = {text}
      message = {message}
    />
  );
};

export default RegisterUploadForm;