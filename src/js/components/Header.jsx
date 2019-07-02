import React from "react";

function Header() {
  return (
  <div className="container-fluid">
    <div className="row banner">
      <div className="col-md-12">
        <div className="row corn">
          <div className="col-9"></div>
          <div className="col-3">
            <div className="shadow"></div>
            <div className="corner">
              <h4 className="text-white text-center pt-2 float-right mr-4">Need a website<br/>or SEO help?</h4>
              <h6 className="corner-content ml-4 mt-1"><i className="fa fa-envelope float-left ml-5 text-white pl-5">&nbsp;&nbsp;</i>Request a Quote</h6>
              <h6 className="ml-5 pl-4 phone">(719) 577-4404</h6>
            </div>
          </div>
        </div>
        <div className="row d-block titles">
          <h1 className="title display-2 mb-0 ml-5 font-weight-bold">GET INFRONT</h1>
          <h6 className="sub-title">Full service agency | In business for over 20 years</h6>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Header;
