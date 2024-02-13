import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import shortid from "shortid";

const Account = () => {
  const allValue = useSelector((state) => state.book.value.addAllInputValue);
  const selectedService = useSelector((state) => state.book.value.serviceValue);
  console.log([allValue.map((clientname) => clientname.clientName)]);
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
          <div className="d-flex gap-4">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Client Name</th>
                  <th scope="col">Companion Name</th>
                  <th scope="col">Check-in-Date</th>
                  <th scope="col">Check-in-Time</th>
                  <th scope="col">Check-in-Date</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Services for you</th>
                  <th scope="col">services for your companionr</th>
                  <th scope="col">estimated time</th>
                  <th scope="col">estimated time companion</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {allValue.map((clientname) => (
                    <td key={shortid.generate()}>{clientname.clientName}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
