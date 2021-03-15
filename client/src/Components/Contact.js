import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="text-center">
        <h1>CONTACT ME</h1>
        <p></p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <input
              type="text"
              className="form-control"
              placeholder="NAME"
              name="name"
            />
            <input
              type="text"
              className="form-control"
              placeholder="PHONE NUMBER"
              phone="phone"
            />
            <input
              type="email"
              className="form-control"
              placeholder="EMAIL"
              email="email"
            />
          </div>
          <div className="col-md-6 col-xs-12">
            <textarea
              type="text"
              className="form-control"
              placeholder="DESCRIPTION"
              phone="phone"
            ></textarea>
            <button className="btn-main-offer contact-btn" type="submit">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
