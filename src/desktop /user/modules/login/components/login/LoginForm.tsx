import React from "react";
import LoginFormStyle from "./LoginFormStyle.module.css";

const LoginForm = () => {
  return (
    <form className={LoginFormStyle.login}>
      <div>
        <div className={LoginFormStyle.label_username}>ЕГН :</div>
        <input className={LoginFormStyle.input_form} name="username" />
      </div>
      <div>
        <div className={LoginFormStyle.label_password}>Парола :</div>
        <div>
          <input
            className={LoginFormStyle.input_form}
            type="password"
            name="password"
          />
        </div>
      </div>
      <button className={LoginFormStyle.submit} type="submit">
        Влез
      </button>
    </form>
  );
};

export default LoginForm;
