import React, { useEffect, useState } from 'react';
import AuthForm from '../components/auth/AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, loginFailure, loginSuccess } from '../modules/auth';
import { useNavigate } from 'react-router-dom';
import { checkUserSuccess } from '../modules/user';
import axios from 'axios';
import { fixUserId } from '../modules/file';

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
      dispatch(
        checkUserSuccess(loginAuth)
      )
    }
  },[loginAuth, loginAuthError, dispatch]);

  useEffect(()=> {
    if(user){
      dispatch(
        fixUserId(user.id)
      )
      navigate('/standard');
    }
  },[navigate, user, dispatch]);

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