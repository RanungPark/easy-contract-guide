import axios from 'axios';

export const contract = ({ userId, pdfFile}) => {
  const formData = new FormData();
  formData.append('userId', userId);
  formData.append('pdfFile', pdfFile);
  axios.post('http://localhost:8080/file/contract', formData ,{
      headers : {
        'Content-Type' : 'multipart/form-data'
      }
    })
}

export const building = ({ contractId, pdfFile}) => {
  const formData = new FormData();
  formData.append('contractId', contractId);
  formData.append('pdfFile', pdfFile);
  axios.post('http://127.0.0.1:8080/file/building-register', formData, {
    headers : {
      'Content-Type' : 'multipart/form-data'
    }
  });
}

export const register = ({ contractId, pdfFile}) => {
  const formData = new FormData();
  formData.append('contractId', contractId);
  formData.append('pdfFile', pdfFile);
  axios.post('http://127.0.0.1:8080/file/certifiedcopy', formData, {
    headers : {
      'Content-Type' : 'multipart/form-data'
    }
  });
}
