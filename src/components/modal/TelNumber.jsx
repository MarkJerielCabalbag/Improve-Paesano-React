import React from "react";
import Input from "../input/Input";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { phoneNumber } from "../../state/state";
const TelNumber = () => {
  const disptach = useDispatch();

  const handleChangeInput = (e) => {
    disptach(phoneNumber(e.target.value));
  };
  return (
    <Input
      label={"Phone Number"}
      icon={faPhone}
      type={"tel"}
      className={"form-control"}
      onChange={handleChangeInput}
    />
  );
};

export default TelNumber;
