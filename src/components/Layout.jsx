import React from 'react';

import Header from './HeaderPagina';
import Footer from './FooterPagina';
import { CAFE_INFO } from '../data/constants'; 

const Layout = ({ children, activeLink }) => {
    
    return (
        <>
            <Header 
                cafeName={CAFE_INFO.name} 
                activeLink={activeLink} 
            />
            
            <main style={{ minHeight: '60vh' }}>
                {children} 
            </main>
            
            <Footer 
                cafeName={CAFE_INFO.name} 
                direccion={CAFE_INFO.address}
                telefono={CAFE_INFO.phone}
                email={CAFE_INFO.email}
            />
        </>
    );
};

export default Layout;