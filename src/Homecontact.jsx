import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const Homecontact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3n757zk', 'template_b3pmbvt', form.current, 'OWQH01wYTen1JTx4V')
      .then(
        () => {
          setSubmitted(true);
          setError(false);
          form.current.reset();
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
              <form ref={form} onSubmit={sendEmail}>
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
    </>
  );
};

export default Homecontact;






