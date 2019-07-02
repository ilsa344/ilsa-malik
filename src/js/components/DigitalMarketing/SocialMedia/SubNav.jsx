import React from 'react';
import {Link} from 'react-router-dom';

function SubNav(){
    return(
        <div className="container-fluid m-0 p-0">
            <div className="row sub-nav">
                <div className="col-md-7 p-0 col-sm-12">
                    <nav className="navbar navbar-expand-md">
                        <ul className="navbar-nav d-flex">
                            <li className="nav-item"><Link to='/' className="nav-link py-0 mt-2 links">Home</Link></li>
                            <li className="nav-item"><Link to='/DigitalMarketing' className="nav-link py-0 mt-2 links">Digital Marketing</Link></li>
                            <li className="nav-item pl-3 pt-2">Social Media</li>
                        </ul>
                    </nav>
                </div>
                <div className="col-md-5 side-cuts m-0 p-0 col-sm-12">
                    <div className="corner">
                        <a href="" className="float-right font-italic font-weight-bold mr-4 mt-2">Request a Quote <span style={{"color": "black", "fontStyle": "normal"}}>or (719) 577-4404</span> </a>
                    </div>
                    <div className="sub-corner"></div>
                </div>
            </div>
        </div>
    )
}
export default SubNav;