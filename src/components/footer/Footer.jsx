import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-dark text-white p-5">
        <div className="container-sm d-sm-flex align-items-start">
          <div className="d-sm-flex flex-sm-column flex-md-column align-items-sm-center ">
            <div>
              <img
                src="{{ asset('assets/image/paesano_logo.jpg') }}"
                id="img"
                className="rounded"
              />
            </div>
            <div>
              <h1 className="fs-5">Paesano</h1>
            </div>
          </div>
          <div className="d-sm-flex flex-sm-row flex-md-column">
            <div className="">
              <div className="mx-4 d-sm-flex d-md-flex flex-sm-row flex-md-row align-items-sm-center align-items-md-center">
                <i className="fa-solid fa-home fa-xl mb-2"></i>
                <span className="m-2">
                  <h5>Marina st., Darapidap rd.</h5>
                  <p>San Antonio Candon City Ilocos Sur</p>
                </span>
              </div>

              <div className="mx-4 d-sm-flex d-md-flex flex-sm-row flex-md-row align-items-sm-center align-items-md-center">
                <i className="fa-solid fa-phone fa-xl mb-2"></i>
                <span className="m-2">
                  <h5>09771043166</h5>
                  <p>Everyday, 9AM to 5PM</p>
                </span>
              </div>

              <div className="mx-4 d-sm-flex d-md-flex flex-sm-row flex-md-row align-items-sm-center align-items-md-center">
                <i className="fa-solid fa-envelope fa-xl mb-2"></i>
                <span className="m-2">
                  <h5>paesanobarbershop @gmail.com</h5>
                  <p>Email us your query</p>
                </span>
              </div>
            </div>
          </div>

          <div className="d-sm-flex flex-sm-column" id="contact">
            <form
              action="{{ route('contact.submitForm') }}"
              method="post"
              id="contactForms"
            >
              @csrf
              <h1 className="h6">Contact Us!</h1>
              <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  aria-label="Name"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </div>
              <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  aria-label="Email"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </div>
              <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">
                  Subject
                </span>
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  aria-label="Subject"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </div>
              <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">
                  Message
                </span>
                <textarea
                  type="text"
                  name="message"
                  className="form-control"
                  aria-label="Message"
                  aria-describedby="inputGroup-sizing-sm"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
