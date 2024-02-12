import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import time from "../objects/time";
import { useSelector, useDispatch } from "react-redux";
import { times } from "../../state/state";

const Select = ({ label, icon, onChange }) => {
  const dispatch = useDispatch();
  const handleTimeChange = (time) => {
    dispatch(times(time));
  };

  return (
    <>
      <label className="mb-2">
        <FontAwesomeIcon icon={icon} /> {label}
      </label>
      <select className="form-select" aria-label="Default select example">
        <option defaultValue="">Choose an hour...</option>
        {time.map((time) => (
          <option key={time.id} onChange={() => handleTimeChange(time.time)}>
            {time.time}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
