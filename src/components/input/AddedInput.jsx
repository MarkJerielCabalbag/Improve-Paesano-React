import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AddedInput = ({
  label,
  type,
  onChange,
  icon,
  showInput,
  placeholder,
}) => {
  return (
    <div>
      {showInput && (
        <>
          <label className="mb-2">
            <FontAwesomeIcon icon={icon} /> {label}
          </label>

          <input
            type={`${type}`}
            className="form-control mb-2"
            onChange={onChange}
            placeholder={placeholder}
          />
        </>
      )}
    </div>
  );
};

export default AddedInput;
