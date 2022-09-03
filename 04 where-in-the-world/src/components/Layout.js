import React from 'react';
import Footer from './Footer';
import Header from './Header';
import '../styles/global.scss';

function Layout({ children }) {
  return (
    <div className="page-container">
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
