import React, { useState } from "react";
import Button from "../button/Button";
import AddedInput from "../input/AddedInput";
import Input from "../input/Input";
import { faUser, faUserFriends } from "@fortawesome/free-solid-svg-icons";
const NameInput = () => {
  const [showInput, setShowInput] = useState(false);
  return (
    <>
      <Input label={"Your Name"} icon={faUser} />
      {
        <AddedInput
          showInput={showInput}
          label={"Added Client"}
          icon={faUserFriends}
        />
      }
      <Button
        variant={"primary mt-2 w-100"}
        onClick={() => {
          setShowInput(true);
        }}
      >
        {"Add More Client"}
      </Button>
      {
        <Button
          showInput={showInput}
          variant={"warning w-100 mt-2"}
          onClick={() => {
            setShowInput(false);
          }}
        >
          {"Remove Newly Added Client"}
        </Button>
      }
    </>
  );
};

export default NameInput;
