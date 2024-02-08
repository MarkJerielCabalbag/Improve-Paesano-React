import React, { useState } from "react";
import Button from "../button/Button";
import AddedInput from "../input/AddedInput";
import Input from "../input/Input";
import { faUser, faUserFriends } from "@fortawesome/free-solid-svg-icons";
const NameInput = () => {
  const [showInput, setShowInput] = useState(false);
  return (
    <>
      <p className="lead fs-6">
        {showInput ? "Note: you can only add 2 clients at the moment" : ""}
      </p>
      <Input
        label={"Your Name"}
        icon={faUser}
        placeholder={"Your name"}
        className={"form-control"}
      />
      {showInput ? (
        <AddedInput
          showInput={showInput}
          label={"Added client"}
          icon={faUserFriends}
          placeholder={"Your Name"}
        />
      ) : (
        ""
      )}
      <Button
        variant={`${showInput ? "danger" : "primary"} mt-2 w-100 `}
        onClick={() => {
          showInput ? setShowInput(false) : setShowInput(true);
        }}
      >
        {showInput ? "Remove added client" : "Add client"}
      </Button>
    </>
  );
};

export default NameInput;
