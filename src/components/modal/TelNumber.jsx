import React from "react";
import Input from "../input/Input";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
const TelNumber = () => {
  return (
    <Input
      label={"Phone Number"}
      icon={faPhone}
      type={"tel"}
      className={"form-control"}
    />
  );
};

export default TelNumber;
