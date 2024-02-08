import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AddedRadio = ({
  label,
  type,
  onChange,
  icon,
  placeholder,
  checked,
  className,
  value,
  name,
}) => {
  return (
    <div>
      <label className="form-label mb-2">
        <FontAwesomeIcon icon={icon} /> {label}
      </label>

      <input
        type={`${type}`}
        className={`${className} mb-2`}
        onChange={onChange}
        placeholder={placeholder}
        checked={checked}
        value={value}
        name={name}
      />
    </div>
  );
};

export default AddedRadio;
