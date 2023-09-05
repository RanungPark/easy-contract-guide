import client from './client';


export const login = ({ email, password}) => {
  client.post('http://localhost:8080/login', {email, password});
}

export const register = ({ email, password, allCheck, username}) => {
  client.post('http://localhost:8080/signup', { 
    email,
    password, 
    privacy_agreement_yn : allCheck, 
    username
  });
}

export const check = () => client.get('http://localhost:8080/check');

export const logout = () => client.get('http://localhost:8080/login');
