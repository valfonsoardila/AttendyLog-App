import { useState } from "react";
import { resources } from "../../../assets/resources";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import CustomInput from "../../../components/uiElements/inputs/CustomInput";
import CustomButton from "../../../components/uiElements/buttons/CustomButton";
import CustomLabel from "../../../components/uiElements/labels/CustomLabel";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./RegisterPage.css";

const RegisterPage = ({ onComponentChange }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(""); // Para mostrar mensajes al usuario
  const [alertView, setAlertView] = useState(false); // Para mostrar mensajes al usuario

  // const handleRegisterClick = async () => {
  //   try {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         title: "foo",
  //         body: "bar",
  //         userId: 1,
  //       }),
  //     });
  //     const data = await response.json();
  //     onComponentChange("login");
  //     setMessage(`Registration successful. User ID: ${data.id}`);
  //     setAlertView(true);
  //   } catch (error) {
  //     setMessage("Error during registration. Please try again.");
  //     setAlertView(true);
  //   }
  // };

  const handleRegisterClick = () => {
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setMessage("Por favor, ingresa todos los campos");
      setAlertView(true);
      setTimeout(() => {
        setAlertView(false);
      }, 2600);
      return;
    }
    if (password !== confirmPassword) {
      setMessage("Las contraseñas no coinciden");
      setAlertView(true);
      setTimeout(() => {
        setAlertView(false);
      }, 2600);
      return;
    } else {
      // Si las contraseñas coinciden, puedes continuar con el registro
      const auth = getAuth(); // Obtén la instancia de autenticación
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          onComponentChange("login");
        })
        .catch((error) => {
          setMessage(
            "Ha ocurrido un error al crear la cuenta. Por favor, intenta nuevamente"
          );
          setAlertView(true);
          setTimeout(() => {
            setAlertView(false);
          }, 2600);
        });
    }
  };
  
  const handleLoginPage = () => {
    onComponentChange("login");
  };
  
  return (
    <>
      <div className="back-arrow">
        <FontAwesomeIcon icon={faArrowLeft} onClick={handleLoginPage} />
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
