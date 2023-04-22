import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div id="home-page">
    <section id="header" className="m-auto">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
            <div className="col-md ml-auto order-2 order-lg-1 d-fflex justify-content-center flex-column">
              <h1 className="mt-5">
                Get start with your favourite <strong className="brand-name">Attire</strong>
                <h2 className="my-3">Latest trending fashion here</h2>
                <div className="mt-3">
                  <NavLink to="/men"  className="btn btn-outline-danger">Shop Now</NavLink>
                </div>
              </h1>
            </div>
           <div className="col-lg-6 order-1 order-lg-2 header-img">
            <img src="https://static.vecteezy.com/system/resources/previews/010/550/949/original/young-happy-woman-walking-with-shopping-bags-sale-bargain-season-sales-discount-concept-illustration-in-flat-faceless-style-pretty-woman-in-the-red-dress-vector.jpg" className="img-fluid" alt="home-img" />
           </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Home;
