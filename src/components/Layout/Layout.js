import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../layout/Header';
import GreenHeader from '../elements/GreenHeader';
import Footer from '../layout/Footer';

const Layout = (props) => {
   let location = useLocation();

   return (
      <>
         {location.pathname === '/' ? <Header /> : <GreenHeader />}
         {props.children}
         <Footer />
      </>
   );
};

export default Layout;