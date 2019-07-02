import React from 'react';
import {Link} from 'react-router-dom'

function SubNav(){
    return(
        <div className="container-fluid m-0 p-0">
            <div className="row sub-nav">
                <div className="col-md-7 p-0 col-sm-12">
                <nav className="navbar navbar-expand-md">
                        <ul className="navbar-nav d-flex">
                            <li className="nav-item"><Link to="/" className="nav-link py-0 mt-2 links">Home</Link></li>
                            <li className="nav-item pt-2 pl-3">Websites</li>
                        </ul>
                    </nav>
                </div>
                <div className="col-md-5 side-cuts m-0 p-0 col-sm-12">
                    <div className="corner">
                        <a href="" className="float-right font-italic font-weight-bold mr-4 mt-2">Request a Quote <span style={{"color": "black", "zIndex": "2", "font-style": "normal"}}>or (719) 577-4404</span> </a>
                    </div>
                    <div className="sub-corner"></div>
                </div>
            </div>
        </div>
    )
}
export default SubNav;