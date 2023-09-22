import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../common/Header';
import Blur from '../common/Blur';
import BuildingMain from '../Main/BuildingMain';

const BuildingView = () => {
  const {building} = useSelector(({file}) => ({
    building: file.building
  }))

  const {file} = building

  return (
    <>
      {file === null ? <Blur type={'building'}/> : <></>}
      <Header />
      <BuildingMain />
    </>
  );
};

export default BuildingView;