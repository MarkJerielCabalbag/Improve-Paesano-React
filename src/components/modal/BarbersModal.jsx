import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetBarber } from "../../state/state";
const BarbersModal = ({ show, setShow }) => {
  const selectBarber = useSelector((state) => state.book.value.barber);
  const dispatch = useDispatch();
  const handleResetBarber = () => {
    dispatch(resetBarber());
  };
  return (
    <>
      {show && (
        <div
          className={`modal fade ${show ? "show" : ""}`}
          tabIndex="-1"
          role="dialog"
          style={{ display: show ? "block" : "none" }}
        >
          <div
            className="modal-dialog"
            id="staticBackdrop"
            data-bs-backdrop="static"
            role="document"
          >
            {selectBarber.map((barber) => (
              <div className="modal-content" key={barber.id}>
                <div className="modal-header">
                  <h5 className="modal-title">
                    {barber.selectedBarber && barber.selectedBarber.barber}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={handleResetBarber}
                  ></button>
                </div>
                <div className="modal-body">
                  <p>Modal body text goes here.</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default BarbersModal;
