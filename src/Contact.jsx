
// import React, { useState, useRef } from "react";
// import emailjs from '@emailjs/browser';

// const Contact = () => {
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
//         <h1 className="text-center">Contact Us</h1>
//       </div>
//       <div className="container contact_div">
//         <div className="row">
//           <div className="col-md-6 col-10 mx-auto">
//             {submitted && !error ? (
//               <div className="alert alert-success" role="alert">
//                 Thank you for reaching out to us. We look forward to assisting you.
//               </div>
//             ) : error ? (
//               <div className="alert alert-danger" role="alert">
//                 There was an error sending your message. Please try again.
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
//                   <label htmlFor="message" className="form-label">Message</label>
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
//                     Submit form
//                   </button>
//                 </div>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//       <section className="mb-3" style={{ marginTop: 0 }}>
//         <iframe
// src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14230.129272370177!2d89.4522638771204!3d26.13561842543461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e2ed4bd11f1993%3A0x7e2a2d3b0a8c22b5!2sDinhata%2C%20West%20Bengal%20736135%2C%20India!5e0!3m2!1sen!2sus!4v1698824982890!5m2!1sen!2sus"
// width="100%"
//           height="450"
//           allowFullScreen
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//           style={{ marginTop: 0 }}
//         ></iframe>
//       </section>
//     </>
//   );
// };

// export default Contact;


// import React, { useState, useRef } from "react";
// import emailjs from '@emailjs/browser';

// const Contact = () => {
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
//         <h1 className="text-center">Contact Us</h1>
//       </div>
//       <div className="container contact_div">
//         <div className="row">
//           <div className="col-md-6 col-10 mx-auto">
//             {submitted && !error ? (
//               <div className="alert alert-success" role="alert">
//                 Thank you for reaching out to us. We look forward to assisting you.
//               </div>
//             ) : error ? (
//               <div className="alert alert-danger" role="alert">
//                 There was an error sending your message. Please try again.
//               </div>
//             ) : (
//               <form ref={form} onSubmit={sendEmail} className="contact-form">
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
//                   <label htmlFor="message" className="form-label">Message</label>
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
//                     Submit form
//                   </button>
//                 </div>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//       <section className="mb-3" style={{ marginTop: 0 }}>
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14230.129272370177!2d89.4522638771204!3d26.13561842543461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e2ed4bd11f1993%3A0x7e2a2d3b0a8c22b5!2sDinhata%2C%20West%20Bengal%20736135%2C%20India!5e0!3m2!1sen!2sus!4v1698824982890!5m2!1sen!2sus"
//           width="100%"
//           height="450"
//           allowFullScreen
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//           style={{ marginTop: 0 }}
//         ></iframe>
//       </section>
//     </>
//   );
// };

// export default Contact;

import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
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
          if (form.current) { // Ensure form.current is not null
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
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            {submitted && !error ? (
              <div className="alert alert-success" role="alert">
                Thank you for reaching out to us. We look forward to assisting you.
              </div>
            ) : error ? (
              <div className="alert alert-danger" role="alert">
                There was an error sending your message. Please try again.
              </div>
            ) : (
              <form ref={form} onSubmit={sendEmail} className="contact-form">
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
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                    name="message"
                    required
                  ></textarea>
                </div>
                <div className="col-12">
                  <button className="btn btn-outline-primary" type="submit">
                    Submit form
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      <section className="mb-3" style={{ marginTop: 0 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14230.129272370177!2d89.4522638771204!3d26.13561842543461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e2ed4bd11f1993%3A0x7e2a2d3b0a8c22b5!2sDinhata%2C%20West%20Bengal%20736135%2C%20India!5e0!3m2!1sen!2sus!4v1698824982890!5m2!1sen!2sus"
          width="100%"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ marginTop: 0 }}
        ></iframe>
      </section>
    </>
  );
};

export default Contact;
