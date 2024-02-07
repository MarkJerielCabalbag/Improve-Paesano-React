import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AddedInput = ({ label, type, onChange, icon, showInput }) => {
  return (
    <div>
      {showInput && (
        <>
          <label className="form-label">
            <p>
              <FontAwesomeIcon icon={icon} /> {label}
            </p>
          </label>

          <input
            type={`${type}`}
            className="form-control"
            onChange={onChange}
          />
        </>
      )}
    </div>
  );
};

export default AddedInput;
