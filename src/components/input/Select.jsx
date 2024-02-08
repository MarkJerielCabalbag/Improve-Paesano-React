import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Select = ({ label, icon, options }) => {
  return (
    <>
      <label className="mb-2">
        <FontAwesomeIcon icon={icon} /> {label}
      </label>
      <select className="form-select" aria-label="Default select example">
        <option disabled selected value="">
          Choose an hour...
        </option>
        <option value="09:00:00">9:00 AM</option>
        <option value="10:00:00">10:00 AM</option>
        <option value="11:00:00">11:00 AM</option>
        <option value="13:00:00">1:00 PM</option>
        <option value="14:00:00">2:00 PM</option>
        <option value="15:00:00">3:00 PM</option>
        <option value="16:00:00">4:00 PM</option>
      </select>
    </>
  );
};

export default Select;
