// import React from "react";
// import web from "../src/images/s1.jpg";
// import { NavLink } from "react-router-dom";

// const Card = (props) => {
//   return (
//     <>
//       <div className="col-md-4 col-12 mx-auto">
//         <div className="card">
//           <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
//           <div className="card-body">
//             <h5 className="card-title font-weight-bold">{props.title}</h5>
//             <p className="card-text">
//               {props.CardTitle}
//             </p>
//             <NavLink to="Contact.jsx" className="btn btn-primary">
//             Enroll Now
//             </NavLink>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Card;

// import React from "react";
// import { NavLink } from "react-router-dom";

// const Card = (props) => {
//   return (
//     <>
//       <div className="col-md-4 col-12 mx-auto">
//         <div className="card">
//           <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
//           <div className="card-body">
//             <h5 className="card-title font-weight-bold">{props.title}</h5>
//             <p className="card-text">
//               {props.CardTitle}
//             </p>
//             <NavLink to="/enroll" className="btn btn-primary">
//               Enroll Now
//             </NavLink>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Card;

// import React from "react";
// import { NavLink } from "react-router-dom";

// const Card = (props) => {
//   return (
//     <>
//       <div className="col-md-4 col-12 mx-auto">
//         <div className="card">
//           <img src={props.imgsrc} className="card-img-top image-3d" alt={props.imgsrc} />
//           <div className="card-body">
//             <h5 className="card-title font-weight-bold">{props.title}</h5>
//             <p className="card-text">
//               {props.CardTitle}
//             </p>
//             <NavLink to="/enroll" className="btn btn-primary">
//               Enroll Now
//             </NavLink>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Card;

import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-12 mx-auto">
        <div className="card card-3d">
          <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">
              {props.CardTitle}
            </p>
            <NavLink to="/enroll" className="btn btn-primary">
              Enroll Now
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
