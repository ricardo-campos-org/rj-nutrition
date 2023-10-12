import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';

const BaseLayout = () => (
  <>
    <Navbar />
    <div className="container">
      <Header />
      <Outlet />
    </div>
  </>
);

export default BaseLayout;
