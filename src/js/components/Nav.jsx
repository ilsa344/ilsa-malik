import React from "react";
import {Link} from 'react-router-dom';

function Nav() {
  
  window.onload=function(){
    var navbar = document.getElementById("navbar");
    var sticky = getPosition(navbar).y;
    window.onscroll = function() {myFunction()};
    function getPosition(el) {
      
      var x = 0,
      y = 0;
      
      while (el != null && (el.tagName || '').toLowerCase() != 'html') {
        x += el.offsetLeft || 0; 
        y += el.offsetTop || 0;
        el = el.offsetParent;
      }
      
      return { x: parseInt(x, 10), y: parseInt(y, 10) };
    }
    function myFunction() {
      
      console.log(getPosition(navbar))
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }
  }
  return (
    <div className="container-fluid">
       <div className="row navigations">
        <div className="col-12">
          <nav className="navbar navbar-expand-md bg-dark navbar-dark navigation " id="navbar">
            <Link className="navbar-brand" to="/"><img src="./images/infront-logo.png" alt=""/></Link> <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collaosibleNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collaosibleNavbar">
            <ul className="navbar-nav ml-5">
              <li className="nav-item">
                <Link to='/DigitalMarketing' className="nav-link p-0 font-weight-bold text-white text-nowrap">DIGITAL MARKETING</Link>
                <div className="dropDown">
                  <ul className="navbar-nav">
                    <li className="nav-item dropDown-li"><Link to='/SEO' className=" nav-link font-weight-bold text-white">SEO</Link>
                      <div className="dropDown-2">
                        <ul className="navbar-nav navbar-nav-2">
                          <li className="nav-item"><a href="" className="nav-link font-weight-bold text-white">SEO PROGRAMS</a></li>
                          <li className="nav-item"><a href="" className="nav-link font-weight-bold text-white text-nowrap">GET SSL CERTIFICATE</a></li>
                          <li className="nav-item"><a href="" className="nav-link font-weight-bold text-white">LOCAL SEO</a></li>
                          <li className="nav-item"><a href="" className="nav-link font-weight-bold text-white text-nowrap">SEO CONSULTING</a></li>
                          <li className="nav-item"><a href="" className="nav-link font-weight-bold text-white">SEO WORKSHOP</a></li>
                          <li className="nav-item"><a href="" className="nav-link font-weight-bold text-white text-nowrap">SEO AUDIT</a></li>
                          <li className="nav-item"><a href="" className="nav-link font-weight-bold text-white">WEBSITE EVALUATION</a></li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item"><Link to='/SEM' className="nav-link font-weight-bold text-white">SEM</Link>
                      <div className="dropDown-2">
                        <ul className="navbar-nav navbar-nav-2 navbar-nav-3">
                          <li className="nav-item"><a href="" className="nav-link font-weight-bold text-white text-nowrap">ADWORDS & PPC &nbsp; &nbsp; </a></li>
                          <li className="nav-item"><a href="" className="nav-link font-weight-bold text-white">ADVERTISING MANAGEMENT</a></li>
                          <li className="nav-item"><a href="" className="nav-link font-weight-bold text-white">OTHER MARKETING SERVICES</a></li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item"><Link to='/SocialMedia' className="text-nowrap nav-link font-weight-bold text-white">SOCIAL MEDIA</Link>
                      <div className="dropDown-2">
                        <ul className="navbar-nav navbar-nav-2 navbar-nav-3">
                          <li className="nav-item"><a href="" className="nav-link font-weight-bold text-white">FACEBOOK </a></li>
                          <li className="nav-item"><a href="" className="nav-link font-weight-bold text-white">TWITTER</a></li>
                          <li className="nav-item"><a href="" className="nav-link font-weight-bold text-white">INSTAGRAM</a></li>
                          <li className="nav-item"><a href="" className="nav-link font-weight-bold text-white">LINKEDIN</a></li>
                          <li className="nav-item"><a href="" className="nav-link font-weight-bold text-white">PINTEREST</a></li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <Link to='/Website' className="nav-link p-0 font-weight-bold text-white">WEBSITES</Link>
                <div className="dropDown">
                  <ul className="navbar-nav">
                    <li className="nav-item"><a href="" className="nav-link font-weight-bold text-white">WEB DESIGN</a></li>
                    <li className="nav-item"><a href="" className="nav-link font-weight-bold text-white">DEVELOPMENT</a>
                      <div className="dropDown-2">
                        <ul className="navbar-nav navbar-nav-2 navbar-nav-4">
                          <li className="nav-item"><a href="" className="nav-link font-weight-bold text-white">WORDPRESS</a></li>
                          <li className="nav-item"><a href="" className="nav-link font-weight-bold text-white text-nowrap">SITEFINITY CMS &nbsp; &nbsp; </a></li>
                          <li className="nav-item"><a href="" className="nav-link font-weight-bold text-white">BUSINESS WEBSITES</a></li>
                          <li className="nav-item"><a href="" className="nav-link font-weight-bold text-white">SMALL BUSINESS WEBSITE</a></li>
                          <li className="nav-item"><a href="" className="nav-link font-weight-bold text-white">CUSTOM WEB APPLICATION</a></li>
                          <li className="nav-item"><a href="" className="nav-link font-weight-bold text-white">WEBSITE COSTS</a></li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item"><a href="" className="nav-link font-weight-bold text-white">ECOMMERCE</a></li>
                    <li className="nav-item"><a href="" className="nav-link font-weight-bold text-white text-nowrap">CLOUD SERVICES</a>
                      <div className="dropDown-2">
                        <ul className="navbar-nav navbar-nav-2 navbar-nav-4">
                          <li className="nav-item"><a href="" className="nav-link font-weight-bold text-white">DOMAIN REGISTRATION</a></li>
                          <li className="nav-item"><a href="" className="nav-link font-weight-bold text-white">EMAIL SERVICES</a></li>
                          <li className="nav-item"><a href="" className="nav-link font-weight-bold text-white">WEB HOSTING</a></li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item"><a href="" className="nav-link font-weight-bold text-white">MOBILE SITES</a></li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link p-0 font-weight-bold text-white" href="#">ABOUT</a>
                <div className="dropDown">
                  <ul className="navbar-nav">
                    <li className="nav-item"><a href="" className="nav-link font-weight-bold text-white">THE TEAM</a></li>
                    <li className="nav-item"><a href="" className="nav-link font-weight-bold text-white">COMPANY</a></li>
                    <li className="nav-item"><a href="" className="nav-link font-weight-bold text-white">JOBS</a></li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link p-0 font-weight-bold text-white">WORK</a>
                <div className="dropDown">
                  <ul className="navbar-nav">
                    <li className="nav-item"><a href="" className="nav-link font-weight-bold text-white">PORTFOLIO</a></li>
                    <li className="nav-item"><a href="" className="nav-link font-weight-bold text-white">CASE STUDIES</a></li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link p-0 font-weight-bold text-white" href="#">BLOG</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link p-0 font-weight-bold text-white b-none">CONTACT</a>
                <div className="dropDown">
                  <ul className="navbar-nav navbar-nav-4">
                    <li className="nav-item"><a href="" className="nav-link font-weight-bold text-white">SUPPORT</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
export default Nav;
