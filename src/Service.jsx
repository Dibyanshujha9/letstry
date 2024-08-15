// import React from "react";
// import Sdata from "./Sdata";
// import Card from "./Card";


// const Service = () => {
//   return (
//     <>
//       <div className="my-5">
//         <h1 className="text-center"> Our Service </h1>
//       </div>
//       <div className="container-fluid mb-5">
//         <div className="row">
//           <div className="col-10 mx-auto">
//             <div className="row gy-4">
//               {Sdata.map((val, ind) => {
//                 return <Card key={ind} imgsrc={val.imgsrc} title={val.title} CardTitle={val.CardTitle} />;
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Service;

import React, { useEffect, useRef } from "react";
import Sdata from "./Sdata";
import Card from "./Card";

const Service = () => {
  const serviceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (serviceRef.current) {
      observer.observe(serviceRef.current);
    }

    return () => {
      if (serviceRef.current) {
        observer.unobserve(serviceRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="my-5" ref={serviceRef}>
        <h1 className="text-center"> Our Services </h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((val, ind) => {
                return <Card key={ind} imgsrc={val.imgsrc} title={val.title} CardTitle={val.CardTitle} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;

