import React from 'react';
import Nav from '../Nav';
import SubNav from './SubNav';
import Form from './Form';
import Logo2nd from '../DigitalMarketing/Logo2nd';
import Footer from '../Footer';


function Website(){
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
export default Website;