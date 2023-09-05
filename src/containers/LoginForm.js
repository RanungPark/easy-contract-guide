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
  const { form, auth, authError, user } = useSelector(({auth, user}) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
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
    if (authError) {
      setError(authError.responseMessage);
      return;
    }
    if (auth) {
      console.log('로그인 성공');
    }
  },[auth, authError]);

  useEffect(()=> {
    if(user){
      navigate('/');
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