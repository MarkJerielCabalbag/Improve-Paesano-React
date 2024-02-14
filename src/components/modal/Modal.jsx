import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import BarberInfo from "./BarberInfo";
import NameInput from "./NameInput";
import TimeDate from "./TimeDate";
import TelNumber from "./TelNumber";
import Services from "./Services";
import Sessions from "./Sessions";
import { addAllValue } from "../../state/state";

const Modal = ({ show, setShow }) => {
  const barber = useSelector((state) => state.book.value.barber);
  const dispatch = useDispatch();
  //access input value
  const clientName = useSelector((state) => state.book.value.clientNameValue);
  const companionName = useSelector(
    (state) => state.book.value.companionNameValue
  );
  const dateValue = useSelector((state) => state.book.value.dateValue);
  const timeValue = useSelector((state) => state.book.value.timeValue);
  const phoneNumberValue = useSelector(
    (state) => state.book.value.phoneNumberValue
  );
  const service = useSelector((state) => state.book.value.serviceValue);
  const addedService = useSelector(
    (state) => state.book.value.addedServiceValue
  );
  const [mergeIfHasCompanion, setMergeIfHasCompanion] = useState([]);

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
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (companionName === "") {
                      dispatch(
                        addAllValue({
                          clientName,
                          dateValue,
                          timeValue,
                          phoneNumberValue,
                          service,
                        })
                      );
                    } else {
                      dispatch(
                        addAllValue({
                          clientName,
                          companionName,
                          dateValue,
                          timeValue,
                          phoneNumberValue,
                          service,
                          addedService,
                        })
                      );
                    }
                  }}
                >
                  <div
                    className="modal-body overflow-y-scroll"
                    style={{ height: "300px" }}
                  >
                    <BarberInfo />
                    <NameInput />
                    <TimeDate />
                    <TelNumber />
                    <Services />
                    <Sessions />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setShow(false)}
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={() => {}}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Modal;
