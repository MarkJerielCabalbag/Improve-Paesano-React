import React from "react";

const Logo = ({ className, src, variant, children, style, purpose }) => {
  return (
    <div className={className}>
      <img src={src} style={style} />
      <h3 className={variant}>{children}</h3>
      <div>
        <h4 className="lead">{purpose}</h4>
      </div>
    </div>
  );
};

export default Logo;
