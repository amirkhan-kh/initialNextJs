import React from 'react';
import Intro from '../../components/intro/index';
import Customer from '../../components/customer/index';
import AboutTop from '../../components/aboutTop/index';
import AboutUs from '../../components/aboutUs/index';
import MenuPage from '../../components/menuPage/index'
const menu:React.FC = () => {
  return (
    <>
      <Intro/>
      <MenuPage/>
      <Customer/>
      <AboutTop/>
      <AboutUs/>
    </>
  )
}

export default menu