import { resources } from "../../../assets/resources";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import CustomInput from "../../../components/uiElements/inputs/CustomInput";
import CustomButton from "../../../components/uiElements/buttons/CustomButton";
import "./RegisterPage.css";

const RegisterPage = ({ onComponentChange }) => {
  const handleRegisterClick = () => {
    onComponentChange("login");
  };
  return (
    <>
      <div className="back-arrow">
        <FontAwesomeIcon icon={faArrowLeft} onClick={handleRegisterClick} />
      </div>
      <div className="user-image">
        <img src={resources.user} alt="user" />
      </div>
      <div className="form-container">
        <div className="form-header">
          <h3>Register</h3>
        </div>
        <div className="form-body">
          <div className="form-group">
            <label htmlFor="name">Introduce your name</label>
            <CustomInput type="text" id="name" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <CustomInput type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <CustomInput type="password" id="password" placeholder="Enter your password" />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <CustomInput type="password" id="confirm-password" placeholder="Confirm your password" />
          </div>
          <div className="form-group">
            <CustomButton type="submit" text="Register" />
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
