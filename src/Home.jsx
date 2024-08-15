// import React from "react";
// import web from "../src/images/img2.svg";
// import { NavLink } from "react-router-dom";
// import Common from "./Common";
// import Service from './Service';
// // import Homecontact from './Homecontact';





// const Home = () => {
//   return (
//     <>
//       <Common
//         name="Elevate your learning path with"
//         imgsrc={web}
//         visit="/service"
//         btname="Get Started"
//       />

// <Service/>
// {/* <Homecontact/>  */}
//     </>
//   );
// };

// export default Home;

import React from "react";
import web from "../src/images/img2.svg";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import Footer from './Footer'; // Make sure Footer is imported if used
import Freqasked from "./Freqasked";
import Choose from "./Choose";

const Home = () => {
  return (
    <>
      <Common
        name="Elevate your learning path with"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
<Choose />
<Freqasked />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
