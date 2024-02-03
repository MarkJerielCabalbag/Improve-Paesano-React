import React from "react";
import { useSelector } from "react-redux";

const BarbersModal = ({ show }) => {
  const selectBarber = useSelector((state) => state.book.value.barber);

  return (
    <>
      {show && (
        <div className="modal" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
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
                  ></button>
                </div>
                <div className="modal-body">
                  <p>Modal body text goes here.</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
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
