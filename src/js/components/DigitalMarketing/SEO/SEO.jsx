import React from 'react';
import Nav from '../../Nav';
import SubNav from './SubNav';
import Form from '../SEO/Form';
import Logo2nd from '../Logo2nd'
import Footer from '../../Footer';

function SEOSection(){
    return(
        <div>
            <Nav />
            <SubNav />
            <Form />
            <Logo2nd />
            <Footer />
        </div>
    )
}
export default SEOSection;