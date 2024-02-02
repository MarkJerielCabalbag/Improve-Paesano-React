import React from "react";

const Button = ({ variant, children, onClick, type }) => {
  return (
    <button type={type} className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
