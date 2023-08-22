import client from './client';


export const login = ({ email, password}) => {
  client.post('http://127.0.0.1:8080/login', {email, password});
}

export const register = ({ email, password, allCheck, username}) => {
  client.post('http://127.0.0.1:8080/signup', { 
    email,
    password, 
    privacy_agreement_yn : allCheck, 
    username
  });
}

export const check = () => client.get('http://127.0.0.1:8080/check');
