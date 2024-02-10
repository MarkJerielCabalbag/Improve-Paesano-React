import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import time from "../objects/time";

const Select = ({ label, icon, onChange }) => {
  return (
    <>
      <label className="mb-2">
        <FontAwesomeIcon icon={icon} /> {label}
      </label>
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={onChange}
      >
        <option defaultValue="">Choose an hour...</option>
        {time.map((time) => (
          <option key={time.id} value={time.time}>
            {time.time}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
