import React from "react";
const ContactBox = () => (
  <section className="section" id="contact">
    <div className="top-header" >
      <h3>Get in touch</h3>
      <span>Do you have a project in your mind, contact me here</span>
    </div>
    <div className="row">
      <div className="col">
        <div className="contact-info">
          <h2>
            find me <i className="uil uil-conner-right-down"></i>
          </h2>
          <p>
            <i className="uil uil-envelope">
              {" "}
              Email: ThanawatSrisaeng@gmail.com
            </i>
          </p>
          <p>
            <i className="uil uil-phone"> Phone: +66-85-556-4028</i>
          </p>
        </div>
      </div>
      <div className="col">
        <div className="form-control">
          <div className="form-input">
            <input type="text" className="input-field" placeholder="Name." />
            <input type="Email" className="input-field" placeholder="Email." />
          </div>
          <div className="text-area">
            <textarea placeholder="Message."></textarea>
          </div>
          <div className="form-button">
            <button className="btn">
              Send <i className="uil uil-message"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactBox;
