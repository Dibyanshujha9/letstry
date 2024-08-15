import React from "react";
import web from "../src/images/img2.svg";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name}
                    <strong className="brand-name"> Let's Try  </strong>
                  </h1>
                  <h2 className="my-3">
                  We are a team of talented educators transforming the future of learning with Let'sTry
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
{/* 
                  <ul>
  <li>Innovative Learning: Cutting-edge technology and teaching methods.</li>
  <li>Expert Educators: Experienced educators passionate about sharing knowledge.</li>
  <li>Diverse Topics: AI, ML, Drone Systems, Web Systems, App Systems, IoT.</li>
  <li>Hands-On Experience: Practical projects to build real-world skills.</li>
  <li>Community Driven: Vibrant community of learners and educators.</li>
</ul> */}
                  </h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn-get-started ">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="Common img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;