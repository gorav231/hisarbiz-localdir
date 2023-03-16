import React from 'react'
import Header from './Header';
import Footer from './Footer';

/**
 * File: src/layouts/layout.js
 * Description: layout of the project.
 * Data: 20/01/2023
 * Author: Renu Singroha
 */

const Layout = ({children}) => {
  return (
    <div>
       <Header />
        {children}
       <Footer/>
    </div>
  )
}
export default Layout;