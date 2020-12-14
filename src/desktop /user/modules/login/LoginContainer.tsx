import React from "react";
import LoginForm from "./components/login/LoginForm";
import LoginContainerStyle from "./LoginContainerStyle.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckMoving } from "@fortawesome/free-solid-svg-icons";

const LoginContainer = () => {
  return (
    <div className={LoginContainerStyle.form}>
      <div className={LoginContainerStyle.logo}>
        <FontAwesomeIcon className="icon" icon={faTruckMoving} />
        Truck Maze
      </div>

      <LoginForm />
    </div>
  );
};

export default LoginContainer;
