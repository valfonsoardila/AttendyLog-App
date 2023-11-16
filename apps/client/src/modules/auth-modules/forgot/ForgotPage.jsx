import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import CustomInput from "../../../components/uiElements/inputs/CustomInput";
import CustomButton from "../../../components/uiElements/buttons/CustomButton";
import "./ForgotPage.css";

const ForgotPage = ({ onComponentChange }) => {
  const handleRegisterClick = () => {
    onComponentChange("login");
  };
  return (
    <>
      <div className="back-arrow">
        <FontAwesomeIcon icon={faArrowLeft} onClick={handleRegisterClick} />
      </div>

      <div className="form-container">
        <div className="form-header">
          <h3>Did you forget your password?</h3>
        </div>
        <div className="form-paragraph">
          <p>
            If you have forgotten your password, plsease enter your email address
            to send you an access recovery link.
          </p>
        </div>
        <div className="form-body">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <CustomInput type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <CustomButton type="submit" text="Send" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPage;
