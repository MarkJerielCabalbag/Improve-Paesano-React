import React from "react";

const Input = ({ label, type, onChange }) => {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input type={`${type}`} className="form-control" onChange={onChange} />
    </div>
  );
};

export default Input;
