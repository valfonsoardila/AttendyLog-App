import { useState } from "react";
import { resources } from "../../../assets/resources";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import CustomInput from "../../../components/uiElements/inputs/CustomInput";
import CustomButton from "../../../components/uiElements/buttons/CustomButton";
import "./LoginPage.css";

const LoginPage = ({ onComponentChange }) => {
  const [passwordValue, setPasswordValue] = useState("");
  const [emailValue, setEmailValue] = useState("");

  const handleRegisterClick = () => {
    onComponentChange("register");
  };
  const handleForgotClick = () => {
    onComponentChange("forgot");
  };
  const login = () => {
    window.location.href = "/dashboard";
  };
  const handleInputChangeEmail = (e) => {
    setEmailValue(e.target.value);
  };
  const handleInputChangePassword = (e) => {
    setPasswordValue(e.target.value);
  };
  return (
    <>
      <div className="logocontainer">
        <img src={resources.logo} alt="logo" />
        <div className="logotext-container">
          <span className="logotext">AttendyLog</span>
          <span className="logintext">Login</span>
        </div>
      </div>
      <div className="formcontainer">
        <div className="form">
          <div className="form-group">
            <label htmlFor="email">
              <FontAwesomeIcon icon={faEnvelope} />
              Email
            </label>
            <CustomInput
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={emailValue}
              onChange={handleInputChangeEmail}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <FontAwesomeIcon icon={faKey} />
              Password
            </label>
            <CustomInput
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={passwordValue}
              onChange={handleInputChangePassword}
            />
            <span className="forgotpassword" onClick={handleForgotClick}>
              Forgot password?
            </span>
          </div>
          <div className="form-group">
            <CustomButton type="button" onClick={login} text={"Login"} />
          </div>
        </div>
        <div className="form-footer">
          <span className="form-footer-text">
            Dont have an account?{" "}
            <span onClick={handleRegisterClick}>Sign up</span>
          </span>
          {/* <div className="form-footer-divider" />
          <div className="form-footer-google">
            <ApiGoogle />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default LoginPage;
