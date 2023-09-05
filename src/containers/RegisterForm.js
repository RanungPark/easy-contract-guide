import React, { useEffect, useState } from 'react';
import AuthForm from '../components/auth/AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register, registerFailure, registerSuccess, toggleAllFalseCheck, toggleAllTrueCheck,  toggleFalseCheck,  toggleTrueCheck } from '../modules/auth';
import { useNavigate } from 'react-router-dom';
import { checkUser } from '../modules/user';
import axios from 'axios';
import * as authAPI from '../libs/api/auth';




const RegisterForm = () => {
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const { form, check, auth, authError, user} = useSelector(({auth, user}) => ({
    form: auth.register,
    check: auth.check,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const navigate = useNavigate();

  const onChange = e => {
    const {value, name} = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value,
      })
    );
  };

  const onToggle = e => {
    const { name } = e.target;
      if(e.target.checked) {
        dispatch(
          toggleTrueCheck({
            form: 'check',
            key: name,
          }),
        )
      } else {
        dispatch(
          toggleFalseCheck({
            form: 'check',
            key: name,
          }),
        )
      } 
  }

  const onAllToggle = e => {
    if(e.target.checked) {
      dispatch(
        toggleAllTrueCheck('check')
      )
    } else {
      dispatch(
        toggleAllFalseCheck('check')
      )
    }
  }

  const onSubmit = e => {
    e.preventDefault();
    
    const { email, password, passwordConfirm, username} = form;
    const {firstCheck, secondCheck, thirdCheck, allCheck} = check

    if([email, password, password, passwordConfirm].includes('')) {
      setError('빈 칸을 모두 입력하세요');
      return;
    }

    if(firstCheck === true && secondCheck === true && thirdCheck === true){
      dispatch(toggleAllTrueCheck('check'));
    } else {
      setError('전체동의를 클릭해주세요');
      return;
    }

    if(password !== passwordConfirm){
      setError('비밀번호가 일치하지 않습니다');
      dispatch(changeField({ form: 'register', key: 'password', value: ''}));
      dispatch(changeField({ form: 'register', key: 'passwordConfirm', value: ''}));
      return;
    }

    axios.post('http://localhost:8080/signup', { 
    email,
    password, 
    privacy_agreement_yn : allCheck, 
    username
    })
    .then(function (response) {
      dispatch(
        registerSuccess(response.data.data)
      )
    })
    .catch(function (error) {
      dispatch(
        registerFailure(error.response.data)
      )
    })

    // dispatch(register({email, password, allCheck, username}))
  }

  useEffect(() => {
    dispatch(initializeForm('register'));
    dispatch(toggleAllFalseCheck('check'));
  }, [dispatch])

  useEffect(() => {
    if (authError) {
      setError(authError.responseMessage)
      return;
    }
    if (auth) {
      console.log('회원가입 성공');
      console.log(auth);
      // axios.get('http://localhost:8080/check')
      // .then(function(response) {
      //   console.log(response);
      // })
      // .catch(function(error){
      //   console.log(error);
      // })
    }
  },[auth, authError]);

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [navigate, user]);

  return (
    <AuthForm 
      type = 'register'
      form = {form}
      check = {check}
      onChange = {onChange}
      onSubmit = {onSubmit}
      onToggle = {onToggle}
      onAllToggle = {onAllToggle}
      error = {error}
    />
  );
};

export default RegisterForm;