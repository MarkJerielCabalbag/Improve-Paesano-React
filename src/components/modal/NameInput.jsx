import React, { useState } from "react";
import Button from "../button/Button";
import AddedInput from "../input/AddedInput";
import Input from "../input/Input";
import { faUser, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  showInput,
  selectedAddedRadio,
  selectedRadio,
  addedService,
  companion,
  clientName,
  serviceSelected,
} from "../../state/state";
const NameInput = () => {
  const show = useSelector((state) => state.book.value.showInput);

  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    dispatch(clientName(e.target.value));
  };

  const handleChangeAddedInput = (e) => {
    dispatch(companion(e.target.value));
  };
  return (
    <>
      <p className="lead fs-6">
        {show ? "Note: you can only add 2 clients at the moment" : ""}
      </p>
      <Input
        label={"Your Name"}
        icon={faUser}
        placeholder={"Your name"}
        className={"form-control"}
        name={"client"}
        onChange={handleChangeInput}
      />
      {show ? (
        <AddedInput
          showInput={show}
          label={"You companion name"}
          icon={faUserFriends}
          placeholder={"Your Name"}
          onChange={handleChangeAddedInput}
        />
      ) : (
        ""
      )}
      <Button
        variant={`${show ? "danger" : "primary"} mt-2 w-100 `}
        onClick={() => {
          dispatch(selectedRadio(true));
          dispatch(selectedAddedRadio(true));
          dispatch(addedService([]));
          dispatch(serviceSelected([]));
          show ? dispatch(showInput(false)) : dispatch(showInput(true));
        }}
      >
        {show ? "Remove added companion" : "Add companion"}
      </Button>
    </>
  );
};

export default NameInput;
