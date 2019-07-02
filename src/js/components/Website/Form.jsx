import React, { Component } from "react";

function Form() {
  return(
    <div className="container-fluid">
      <div className='second-section'>
        <div className="row mt-4">
          <div className="col-md-8 form-section">
            <br/>
              <h1 className="title pl-1">
                WEBSITE EXPERTISE YOU CAN RELY ON
              </h1>
              <p className="mt-4 pt-2 form-content pl-1">In today’s market, customers make decisions about your business before they even speak to you. And their decisions to purchase are based on their online experience – specifically the <strong>appearance, usability and accessibility of your website.</strong></p>
              <p className=" form-content pl-1">Infront Webworks is a trusted Google partner and award-winning website development company with expertise in planning and building <a className="links">websites, SEO,</a> digital <a className="links">marketing</a> and <a className="links"> cloud services.</a> For more than 20 years, we've been building world-class websites and web applications, drawing visitors to clients' websites, and delivering exceptional email, hosting, vpn and virtual server related services. .</p>
              <p className="form-content pl-1">Our team of <a className="links">award-winning website development and design experts</a> collaborate across specialties to produce powerful results for your business. With Infront, you will work with highly-innovative staff, including designers, programmers, database engineers, cloud engineers, production managers, marketing SEO specialists, and support staff. </p>
              <p className="form-content pl-1">All of our processes, experience and skills combine to deliver a visually compelling, functionality rich experience for your customers. Your business will also benefit from a set of professional, reliable tools supported by a team of<a className="font-weight-bold links"> world-class website experts.</a></p>
              <div className="inner-content row p-5 ml-1">
                <div className="col-md-10">
                <h6 className="text-white">Just a simple site?  Or complex custom coding?</h6>
                <p className="div-inner-content">Infront is one of the few digital agencies that has extensive experience creating sites from one end of the spectrum to the other.</p>
              </div>
              <div className="col-md-2">
                <button className='btn btn-info mt-5'>CONTACT US</button>
              </div>
            </div>
            <h4 className="pt-3" style={{'fontWeight': '900'}}> UPDATING AN EXISTING WEBSITE? </h4>
            <p className="form-content pt-2">We can help with that too, and have extensive experience <a className="links">moving existing websites into modern platforms.</a> Together, we will discuss tools that not only make it easier to manage your website but enhance its functionality with newer applications. If you've outgrown your website, give us a call.  If you're afraid to find out how much it will cost to replace a site that was expensive a decade ago, let's talk. We can help you work through ROI and collaborate on a phased approach that works for your budget, the future growth of your business and your site users.</p> 
            <p className="form-content pt-2">It's not just our job, it's our craft.  We like to become part of our clients' team; you can think of us as an extension of your staff.  We are transparent in our processes, honest in our communication and committed to your success. </p>
            <p className="fomr-content pt-2">We've made a science of <a className="links">finding and using the best technologies</a> for the job. Our focus on user experience means your content will be accessible to all types of people and devices, delivering the brand experience your customers desire.</p>
            <p className="form-content pt-2">Website development we love to do:</p>
            <ul className="ml-3">
              <li><a className="links">Small Business Websites</a></li>
              <li><a className="links">Responsive & Mobile Websites</a></li>
              <li><a className="links">WordPress Websites</a></li>
              <li><a className="links">Sitefinity Websites</a></li>
              <li><a className="links">Custom Web Application</a></li>
              <li><a className="links">View our Website Portfolio</a></li>
            </ul>
            <div className="inner-content row p-5 ml-1">
                <h6 className="text-white">Looking for more info?</h6>
                <p className="div-inner-content">Try our<a className="links"> portfolio page</a>, where you can see a small sample of the hundreds of sites we've built.  Or check out the answer to a question we are often asked <a className="links">'What does a website cost?'</a></p>
            </div>
            </div>
            <div className="col-md-4 form">
              <iframe src="https://app-3QNBZMAT7U.marketingautomation.services/prospector/form/MzawMDEzNjY1BAA/M7EwMEpLsUzTNTI3TdM1MTZJ1U0yM7TQNUhJtDA1ME1NsUw2BgA?_tk=201906|5cfe231891e95850af07493e" frameBorder="0" height="517" width="100%"></iframe>
              <img src="./images/google-reviews.jpg" alt=""/>
              <p className="font-weight-bold font-italic">"Infront Webworks has been great to work with, and the results are undeniable. They have updated my website for me, and have been handling my SEO, and business has increased as a direct result. Their staff has treated me very professionally, and keep me updated every step of the way."</p>
              <p className="font-italic">L. Juhl (Learning RX)</p>
              <div className="in-content mb-5">
              <img src="./images/responsive-design-wolfe (1).jpg" className="d-block mx-auto pt-2" />
              <h1 className="font-weight-bold font-italic h4 pt-5 pl-5">Need Web Work?</h1>
              <p className="pl-5 card-contnet mb-0">Our team of experts can help!</p>
              <p className="px-5 content">Whether you need a web site or have one that needs a redesign, we are the right choice.  All of our processes, experience and skills combine to deliver a visually compelling, functionality rich experience for your customers. .</p>
              <button className="btn ml-5 p-3 mb-5">GET YOUR SEO AUDIT</button>
            </div>
            </div>
          </div>
      </div>
    </div>
  )
}
export default Form;
