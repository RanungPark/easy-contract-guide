import React from 'react';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../modules/user';

const HeaderContainer = () => {
  const {user} = useSelector(({user}) => 
  ({
    user: user.user,
  }));

  const dispatch = useDispatch();


  return (
    <Header 
      user={user}
    />
  );
};

export default HeaderContainer;