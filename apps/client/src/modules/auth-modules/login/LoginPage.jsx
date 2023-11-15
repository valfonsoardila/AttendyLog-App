import { resources } from "../../../assets/resources";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import "./LoginPage.css";

const LoginPage = ({ onComponentChange }) => {
  const handleRegisterClick = () => {
    onComponentChange("register");
  };
  const handleForgotClick = () => {
    onComponentChange("forgot");
  };
  const login = () => {
    window.location.href = "/dashboard";
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
            <input type="email" id="email" name="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <FontAwesomeIcon icon={faKey} />
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
            <span className="forgotpassword" onClick={handleForgotClick}>
              Forgot password?
            </span>
          </div>
          <div className="form-group">
            <button className="glow-on-hover" type="button" onClick={login}>
              Login
            </button>
          </div>
        </div>
        <div className="form-footer">
          <span className="form-footer-text">
            Don't have an account?{" "}
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
