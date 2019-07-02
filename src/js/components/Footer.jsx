import React from "react";
function Footer() {
  return(
    <div className="container-fluid">
      <div className="row footer bg-dark">
        <div className="col-md-6 footer-col-1">
          <div className="row inner-col-1">
            <div className="col-6 mb-5 text-white">
              <h5 className="h6 footer-title font-weight-bold mt-4">Infront Webwroks</h5>
              <span className="footer-address">5350 Tomah Dr #2800 <br/>Colorado Springs, CO <br/>80918</span><br/>
              <img src="./images/map.png" className=" ml-5" alt=""/>
              <h6 className="h6 font-weight-bold follow mt-3">Follow Us</h6>
              <span>
                <i className="fa fa-facebook p-1 text-center"></i>
                <i className="fa fa-twitter ml-3 p-1 text-center"></i>
                <i className="fa fa-linkedin ml-3 p-1"></i>
                <i className="fa fa-google-plus ml-3 p-1"></i>
              </span>
            </div>
            <div className="col-6 info">
              <h6 className="info-title font-weight-bold text-white pt-3">Have Questions or Need Help?</h6>
              <p className="sale mb-0 mt-2">SALES:<span className="font-weight-bold"> (719) 577-4404</span></p>
              <p className="sale mb-0">SUPPOT:<span className="font-weight-bold">  (719) 359-5540</span></p>
              <p className="sale mb-0">BILLING:<span className="font-weight-bold"> (719) 577-4404</span></p>
              <p className="sale mb-">FAX:<span className="font-weight-bold"> (719) 630-7073</span></p>
              <a href="" className="text">Open a Support Ticket</a><br/>
              <a href="" className="text">Job Opening</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 footer-col-3">
          <div className="row footer-inner-row d-flex">
            <div className="col-4 inner-col-1">
              <a href="" className="ml-3 main-title font-italic main-title-sup" style={{"fontWeight": "700"}}>WEB</a><br/>
              <a href="" className="ml-3 main-title">Web Design</a><br/>
              <a href="" className="ml-3 main-title">Development</a><br/>
              <a href="" className="ml-3 main-title">Ecommerce</a><br/>
              <a href="" className="ml-3 main-title">Cloud Services</a>
            </div>
            <div className="col-4 inner-col-1">
              <a href="" className="ml-3 main-title font-italic main-title-sup" style={{"fontWeight": "700"}}>DIGITAL MARKETING</a><br/>
              <a href="" className="ml-3 main-title">SEO</a><br/>
              <a href="" className="ml-3 main-title">SEM</a><br/>
              <a href="" className="ml-3 main-title">Social Media</a><br/>
            </div>
            <div className="col-4 inner-col-1">
              <a href="" className="ml-3 main-title font-italic main-title-sup" style={{"fontWeight": "700", "paddingBottom": "20px"}}>CLOUD SERVICES</a><br/>
              <a href="" className="ml-3 main-title">DomainRegistration</a><br/>
              <a href="" className="ml-3 main-title">Email Services</a><br/>
              <a href="" className="ml-3 main-title">Web Hosting</a><br/>
            </div>
          </div>
          <div className="row footer-inner-row-2">
            <div className="col-md-8 inner-col-02 mt-5">
              <input type="text" placeholder="Lookin for something ?" className="p-2" />
            </div>
            <div className="col-md-4 inner-col-03 mt-5">
              <button className="btn ml-2 btn-md">SEARCH</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row main-footer bg-dark">
        <div className="col-md-12">
          <div className="row main-footer-it">
            <div className="col-md-3">
              <p className="font-weight-bold p-3 my-auto text-white footer-text">&copy; 2019 Infront Webwroks</p>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="footer-nav">
                <a href="" className="px-3 border-right">Terms of Services</a>
                <a href="" className="px-3 border-right">Privacy Policy</a>
                <a href="" className="px-3 border-right">Jobs</a>
                <a href="" className="px-3 border-right">Comppany</a>
                <a href="" className="px-3">The Team  </a>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer;
