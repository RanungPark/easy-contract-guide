import React, { useEffect, useState } from 'react';
import AuthForm from '../components/auth/AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, login, loginFailure, loginSuccess } from '../modules/auth';
import { useNavigate } from 'react-router-dom';
import { checkUser } from '../modules/user';
import axios from 'axios';

const LoginForm = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { form, loginAuth, loginAuthError, user } = useSelector(({auth, user}) => ({
    form: auth.login,
    loginAuth: auth.loginAuth,
    loginAuthError: auth.loginAuthError,
    user: user.user,
  }));

  const onChange = e => {
    const {value, name} = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      })
    );
  };

  const onSubmit = e => {
    e.preventDefault();
    const { email, password } = form;
    axios.post('http://localhost:8080/login', {email, password})
    .then(function (response) {
      dispatch(
        loginSuccess(response.data.data)
      )
    })
    .catch(function (error) {
      dispatch(
        loginFailure(error.response.data)
      )
    })
  }

  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch])

  useEffect(() => {
    if (loginAuthError) {
      setError(loginAuthError.responseMessage);
      return;
    }
    if (loginAuth) {
      console.log('로그인 성공');
      console.log(loginAuth);
      axios.get('http://localhost:8080/check')
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error){
        console.log(error);
      })
    }
  },[loginAuth, loginAuthError]);

  useEffect(()=> {
    if(user){
      navigate('/main');
    }
  },[navigate, user]);

  return (
    <AuthForm 
      type = 'login'
      form = {form}
      onChange = {onChange}
      onSubmit = {onSubmit}
      error={error}
    />
  );
};

export default LoginForm;