import React from "react";
import { useSelector } from "react-redux";

const Modal = ({ show, setShow }) => {
  const barber = useSelector((state) => state.book.value.barber);

  return (
    <div>
      {show && (
        <div
          className={`modal fade ${show ? "show" : ""}`}
          data-bs-backdrop="static"
          tabIndex="-1"
          role="dialog"
          style={{ display: show ? "block" : "none" }}
        >
          {barber.map((barber) => (
            <div className="modal-dialog modal-dialog-centered" key={barber.id}>
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">
                    {barber.barber}
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={() => {
                      setShow(false);
                    }}
                  ></button>
                </div>
                <div className="modal-body"></div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShow(false)}
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Understood
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Modal;
