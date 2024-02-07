import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Input = ({ label, type, onChange, icon }) => {
  return (
    <div>
      <label className="form-label">
        <p>
          <FontAwesomeIcon icon={icon} /> {label}
        </p>
      </label>

      <input type={`${type}`} className="form-control" onChange={onChange} />
    </div>
  );
};

export default Input;
