import React, { Components } from "react";

function Blog(){
    return(
        <div className="container-fluid">
            <div className="row blogsD mt-5 pt-4">
                <div className="col-md-12">
                    <div className="row">
                    <div className="col-md-12 blog-heading">
                        <h1 className="font-weight-bold b-title display-4">FROM OUR BLOG</h1>
                    </div>
                    </div>
                    <div className="row inner-detail">
                    <div className="col-md-2">
                        <img src="./images/pinterst-thumbnail.jpg" alt=""/>
                    </div>
                    <div className="col-md-4 inner-content-1">
                        <h4 className="sub-title font-weight-bold">6 tips to optimize your Pinterest profile effectively-Guest Blog</h4>
                        <p className="content">Businesses can leverage Pinterest’s powerful engagement rate to promote themselves. But first, they need to understand how Pinterest works and create an efficiently optimized business profile. Therefore, to help you with that, I will list 6 tips that every business, no matter how small or big, can use to create an impressive business profile on Pinterest</p>
                        <span className="date"><i className="fa fa-pencil"></i><i className="fa fa-calendar ml-3"></i>&nbsp; May 30, 2019</span>
                    </div>
                    <div className="col-md-2">
                        <img src="./images/Capture-2.png" alt="" className="mt-3"/>
                    </div>
                    <div className="col-md-4 inner-content-1">
                    <h4 className="sub-title font-weight-bold">6 tips to optimize your Pinterest profile effectively-Guest Blog</h4>
                        <p className="content">Businesses can leverage Pinterest’s powerful engagement rate to promote themselves. But first, they need to understand how Pinterest works and create an efficiently optimized business profile. Therefore, to help you with that, I will list 6 tips that every business, no matter how small or big, can use to create an impressive business profile on Pinterest</p>
                        <span className="date"><i className="fa fa-pencil"></i> &nbsp; Stephanie Hooper<i className="fa fa-calendar ml-3"></i>&nbsp; Apr 4, 2019</span>
                    </div>
                    </div>
                    <div className="row"><button className="btn ml-3 mb-4 px-5 mt-5">Visit Our Blog</button></div>
                </div>
                </div>
                <div className="row logos my-5">
                <div className="col-md-12 justify-content-around d-flex logo p-4">
                    <img className="img" src="./images/landy_award_2018.png" alt=""/>
                    <img className="img" src="./images/google_bbb_sq.png" alt=""/>
                    <img className="img" src="./images/lsa-color.png" alt=""/>
                    <img className="img" src="./images/bestbusiness-color.png" alt=""/>
                    <img className="img" src="./images/clutch-color.png" alt=""/>
                    <img className="img" src="./images/best-seo-company-transparent_sm.png" alt=""/>
                    <img className="img" src="./images/us_search_awards_2018f0cde23448224fdbaeb7fb61e85e7131.png" alt=""/>
                </div>
            </div>
        </div>
    )
}
export default Blog;