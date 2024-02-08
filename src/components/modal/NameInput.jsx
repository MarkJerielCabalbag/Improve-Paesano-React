import React, { useState } from "react";
import Button from "../button/Button";
import AddedInput from "../input/AddedInput";
import Input from "../input/Input";
import { faUser, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { showInput } from "../../state/state";
const NameInput = () => {
  const show = useSelector((state) => state.book.value.showInput);
  const dispatch = useDispatch();
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
      />
      {show ? (
        <AddedInput
          showInput={show}
          label={"Added client"}
          icon={faUserFriends}
          placeholder={"Your Name"}
        />
      ) : (
        ""
      )}
      <Button
        variant={`${show ? "danger" : "primary"} mt-2 w-100 `}
        onClick={() => {
          show ? dispatch(showInput(false)) : dispatch(showInput(true));
        }}
      >
        {show ? "Remove added client" : "Add client"}
      </Button>
    </>
  );
};

export default NameInput;
