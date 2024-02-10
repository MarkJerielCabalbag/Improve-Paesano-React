import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Account = () => {
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
            <a href="">Appointment Details</a>
            <a href="">Notification</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
