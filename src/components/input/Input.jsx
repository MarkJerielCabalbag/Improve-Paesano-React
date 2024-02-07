import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Input = ({ label, type, onChange, icon, placeholder }) => {
  return (
    <div>
      <label className="form-label mb-2">
        <FontAwesomeIcon icon={icon} /> {label}
      </label>

      <input
        type={`${type}`}
        className="form-control mb-2"
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
