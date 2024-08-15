
// import React, { useState, useRef } from "react";
// import emailjs from '@emailjs/browser';

// const Enroll = () => {
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState(false);
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_3n757zk', 'template_b3pmbvt', form.current, 'OWQH01wYTen1JTx4V')
//       .then(
//         () => {
//           setSubmitted(true);
//           setError(false);
//           form.current.reset();
//         },
//         (error) => {
//           console.log('Error sending email:', error);
//           setError(true);
//         }
//       );
//   };

//   return (
//     <>
//       <div className="my-5">
//         <h1 className="text-center">Enroll Now</h1>
//       </div>
//       <div className="container contact_div">
//         <div className="row">
//           <div className="col-md-6 col-10 mx-auto">
//             {submitted && !error ? (
//               <div className="alert alert-success" role="alert">
//               Thank you for enrolling. We look forward to assisting you.
//               </div>
//             ) : error ? (
//               <div className="alert alert-danger" role="alert">
//                 There was an error. Please try again.
//               </div>
//             ) : (
//               <form ref={form} onSubmit={sendEmail}>
//                 <div className="mb-3">
//                   <label htmlFor="user_name" className="form-label">Full Name</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="user_name"
//                     name="from_name"
//                     placeholder="Enter your name"
//                     required
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="user_phone" className="form-label">Phone</label>
//                   <input
//                     type="tel"
//                     className="form-control"
//                     id="user_phone"
//                     name="user_phone"
//                     placeholder="Mobile number"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="user_email" className="form-label">Email address</label>
//                   <input
//                     type="email"
//                     className="form-control"
//                     id="user_email"
//                     name="user_email"
//                     placeholder="name@example.com"
//                     required
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="message" className="form-label">Course of Choice</label>
//                   <textarea
//                     className="form-control"
//                     id="message"
//                     rows="3"
//                     name="message"
//                     required
//                   ></textarea>
//                 </div>
//                 <div className="col-12">
//                   <button className="btn btn-outline-primary" type="submit">
//                   Confirm Enrollment
//                   </button>
//                 </div>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
     
//     </>
//   );
// };

// export default Enroll;

import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const Enroll = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3n757zk', 'template_b3pmbvt', form.current, 'OWQH01wYTen1JTx4V')
      .then(
        () => {
          setSubmitted(true);
          setError(false);
          if (form.current) { 
            form.current.reset();
          }
        },
        (error) => {
          console.log('Error sending email:', error);
          setError(true);
        }
      );
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Enroll Now</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            {submitted && !error ? (
              <div className="alert alert-success" role="alert">
                Thank you for enrolling. We look forward to assisting you.
              </div>
            ) : error ? (
              <div className="alert alert-danger" role="alert">
                There was an error. Please try again.
              </div>
            ) : (
              <form ref={form} onSubmit={sendEmail} className="enroll-form">
                <div className="mb-3">
                  <label htmlFor="user_name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="user_name"
                    name="from_name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="user_phone" className="form-label">Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="user_phone"
                    name="user_phone"
                    placeholder="Mobile number"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="user_email" className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="user_email"
                    name="user_email"
                    placeholder="name@example.com"
                    required
                  />
                </div>
                <div className="mb-3">
  <label htmlFor="course" className="form-label">Course of Choice</label>
  <textarea
    className="form-control"
    id="course"
    rows="2" /* Reduce the number of rows to make it smaller */
    name="course"
    style={{ height: '60px' }} /* Adjust the height as needed */
    required
  ></textarea>
</div>
                <div className="col-12">
                  <button className="btn btn-outline-primary" type="submit">
                    Confirm Enrollment
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Enroll;

