import { useState } from "react";
import { resources } from "../../../assets/resources";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import CustomInput from "../../../components/uiElements/inputs/CustomInput";
import CustomButton from "../../../components/uiElements/buttons/CustomButton";
import CustomLabel from "../../../components/uiElements/labels/CustomLabel";
import "./RegisterPage.css";

const RegisterPage = ({ onComponentChange }) => {
  const [message, setMessage] = useState(""); // Para mostrar mensajes al usuario
  const [alertView, setAlertView] = useState(false); // Para mostrar mensajes al usuario
  
  const handleRegisterClick = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "foo",
          body: "bar",
          userId: 1,
        }),
      });

      const data = await response.json();
      onComponentChange("login");
      setMessage(`Registration successful. User ID: ${data.id}`);
      setAlertView(true);
    } catch (error) {
      setMessage("Error during registration. Please try again.");
      setAlertView(true);
    }
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
            <CustomLabel htmlFor="name" text="Introduce your name" />
            <CustomInput type="text" id="name" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <CustomLabel htmlFor="email" text="Introduce your email" />
            <CustomInput type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <CustomLabel htmlFor="password" text="Introduce your password" />
            <CustomInput type="password" id="password" placeholder="Enter your password" />
          </div>
          <div className="form-group">
            <CustomLabel htmlFor="confirm-password" text="Confirm your password" />
            <CustomInput type="password" id="confirm-password" placeholder="Confirm your password" />
          </div>
          <div className="form-group">
            <CustomButton type="submit" text="Register" onClick={handleRegisterClick} />
          </div>
        </div>
        <div className="form-footer-alert">
          {alertView && (
            <div
              className="form-message"
              style={{
                background: message.includes("error")
                  ? "#f23030"
                  : message.includes("ingresa")
                  ? "#f23030"
                  : "green",
              }}
            >
              {message && <p>{message}</p>}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
