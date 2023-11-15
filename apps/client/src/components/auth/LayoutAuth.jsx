import { useState } from "react"
import "./LayoutAuth.css"
import { resources } from "../../assets/resources"
import LoginPage from "../../modules/auth-modules/login/LoginPage"
import RegisterPage from "../../modules/auth-modules/register/RegisterPage"
import ForgotPage from "../../modules/auth-modules/forgot/ForgotPage"
import { motion } from "framer-motion"

const LayoutAuth = () => {
  const [activeComponent, setActiveComponent] = useState("login");
  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };
  return (
    <div
      className="maincontainer"
      style={{ backgroundImage: `url(${resources.bgAuth})` }}
    >
      <div className="blur-main">
        <motion.div
          className="container-auth"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {activeComponent === "login" && (
            <LoginPage onComponentChange={handleComponentChange} />
          )}
          {activeComponent === "register" && (
            <RegisterPage onComponentChange={handleComponentChange} />
          )}
          {activeComponent === "forgot" && (
            <ForgotPage onComponentChange={handleComponentChange} />
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default LayoutAuth;
