import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const MainLayout = () => {
  return (
    <div className='font-poppins w-11/12 mx-auto'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;