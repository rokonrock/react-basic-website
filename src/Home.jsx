import React from "react";
import web from "../src/images/flower_background.jpg";

const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>
                  Your faithful IT Solution with
                  <strong className="brand-name"> North Atlantic IT Solutions </strong>
                </h1>
                <h2 className="my-3">
                  Your trusted partner to solve your technical problems
                </h2>
                <div className="mt-3">
                  <a href="/" className="btn btn-info"> Get started </a>
                </div>
              </div>

              <div className="col-lg-6 order-1 order-lg-2 header-img">
              <img src={web} className="img-fluid animated" alt="home img" />  
            </div>

            </div>


            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
