import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import shortid from "shortid";

const Account = () => {
  const allValue = useSelector((state) => state.book.value.addAllInputValue);
  const selectedService = useSelector((state) => state.book.value.serviceValue);
  console.log([allValue.map((clientname) => clientname.clientName)]);
  console.log([allValue.map((item) => item)]);
  return (
    <div className="">
      <div className="container">
        <div>
          <h1>
            <FontAwesomeIcon icon={faUser} /> User
          </h1>
          <p>Nice to see you again User!</p>
        </div>

        <div>
          {allValue.map((item) => (
            <div className="d-flex gap-4" key={item.id}>
              <div className="card" style={{ width: "500px" }}>
                <div className="card-body">
                  <h5 className="card-title">Service Accquired Overview</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    {item.clientName}
                  </h6>
                  <div>
                    <p className="card-text">{item.companionName}</p>
                    <p className="card-text">{item.dateValue}</p>
                    <p className="card-text">{item.phoneNumberValue}</p>
                    <p className="card-text">
                      {selectedService.map(
                        (serviceType) => serviceType.id === item.service.id
                      )}
                    </p>
                    <p className="card-text">{item.timeValue}</p>
                    <button className="btn btn-warning">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Account;
