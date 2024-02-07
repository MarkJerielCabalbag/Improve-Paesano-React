import React, { useState } from "react";
import book from "../components/objects/book";
import { useDispatch, useSelector } from "react-redux";
import { chooseBarber } from "../state/state";
import Modal from "../components/modal/Modal";

const Book = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <div className="d-sm-flex flex-column container-sm mt-5 mb-5">
        <div className="">
          <h1 className="display-6 fw-medium">
            Book Your Appointment – Unleash Your Style!
          </h1>
          <p className="lead mt-3">
            Ready to elevate your grooming game? Booking an appointment at
            Paesano Barber Shop is a breeze. Simply select a date and time that
            suits you best, and let our master barbers work their magic.
          </p>
        </div>
        <div className="row row-cols-sm-2 row-cols-md-4 justify-content-sm-center justify-content-center">
          {book.map((barber) => (
            <div
              className="card m-2"
              style={{ width: "20rem" }}
              key={barber.id}
            >
              <img
                src="{{ asset('assets/image/img3.jpg') }}"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  <i className="fa-regular fa-user"></i> {barber.barber}
                </h5>
                <p className="card-text lead-sm">{barber.details}</p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    dispatch(chooseBarber(barber.id));
                    setShow(true);
                  }}
                >
                  {barber.barberNumber}
                </button>
              </div>
            </div>
          ))}
          {<Modal show={show} setShow={setShow} />}
        </div>
      </div>
    </>
  );
};

export default Book;
