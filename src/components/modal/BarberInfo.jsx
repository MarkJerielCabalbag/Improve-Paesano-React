import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";

const BarberInfo = () => {
  const barber = useSelector((state) => state.book.value.barber);
  return (
    <div>
      {barber.map((barber) => (
        <div key={barber.id}>
          <h1 className="display-3">
            <FontAwesomeIcon icon={faUserCheck} />
            {barber.barber}
          </h1>
          <p className="lead fs-6">
            Please fill in the details to book an appointment with Barber{" "}
            {barber.barber}:
          </p>
        </div>
      ))}
    </div>
  );
};

export default BarberInfo;
