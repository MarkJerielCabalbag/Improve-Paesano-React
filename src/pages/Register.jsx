import React, { useState } from "react";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import Logo from "../components/signiture/Logo";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => [
      {
        ...prevUser,
        [name]: value,
      },
    ]);
  };

  return (
    <div className="d-flex align-items-center" style={{ height: "100vh" }}>
      <form
        className="mx-auto my-auto p-3 shadow-lg bg-body-tertiary rounded"
        style={{ width: "40%" }}
      >
        <Logo
          src={"src/assets/paesano_logo.jpg"}
          children={"Paesano Barber Shop"}
          className={"d-flex flex-column align-items-center mb-2"}
          style={{ width: "80px" }}
          purpose={"Register"}
        />
        <Input type={"email"} label={"Email"} onChange={handleChange} />
        <Input type={"text"} label={"Username"} onChange={handleChange} />
        <Input type={"password"} label={"Password"} onChange={handleChange} />
        <div className="d-flex gap-3 justify-content-end">
          <Button type={"submit"} variant={"primary"}>
            {"Register"}
          </Button>
          <Button type={"submit"} variant={"warning"}>
            {"Already have an account?"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
