import React from 'react';
import Header from '../common/Header';
import { useSelector } from 'react-redux';
import Blur from '../common/Blur';
import StandardMain from '../Main/StandardMain';

export default function StandardView() {
  const {contract} = useSelector(({file}) => ({
    contract: file.contract
  }))

  const {file} = contract

  return (
    <>
      {file === null ? <Blur type={'standard'}/> : <></>}
      <Header />
      <StandardMain />
    </>
  );
}

