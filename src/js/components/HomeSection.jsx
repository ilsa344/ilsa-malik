import React from 'react';
import Header from "./Header";
import Nav from "./Nav"
import Form from "./Form";
import Footer from "./Footer";
import Feature from "./Feature";
import Blog from "./Blog";

function HomeSection(){
    return(
        <div>
            <Header />
            <Nav />
            <Form />
            <Feature />
            <Blog />
            <Footer />
        </div>
    )
}
export default HomeSection;