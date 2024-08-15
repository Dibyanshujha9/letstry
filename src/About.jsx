import React from 'react';
import web from "../src/images/hero-img.png";
import { NavLink } from 'react-router-dom';
import Common from './Common';
import Enroll from './Enroll';



const About = () => {
    return (
      <>
        <Common
          name="Welcome to About page of"
          imgsrc={web}
          visit="/knowmore"
          btname="know more"

   />
    <Enroll/>
     </>
    );

};
export default About;