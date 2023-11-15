import React,{useState} from "react";
import "./ProfilePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faEdit, faAngleDoubleRight, faLanguage } from "@fortawesome/free-solid-svg-icons";
import { resources } from "../../../assets/resources";
import { motion } from "framer-motion";

const ProfilePage = () => {
  return (
    <motion.div
      className="container-profile"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="profile-settings">
        <div className="main-profile-settings">
          <div className="profile-settings__header">
            <h1>Settings</h1>
          </div>
          <div className="profile-settings__body">
            <div className="profile-settings__body__item">
              <FontAwesomeIcon icon={faEdit} />
              <span>Change profile data</span>
              <FontAwesomeIcon icon={faAngleDoubleRight} beatFade/>
            </div>
            <div className="profile-settings__body__item">
              <FontAwesomeIcon icon={faLanguage} />
              <span>Change languages</span>
              <FontAwesomeIcon icon={faAngleDoubleRight} beatFade/>
            </div>
            <div className="profile-settings__body__item">
              <FontAwesomeIcon icon={faEdit} />
              <span>Change profile data</span>
              <FontAwesomeIcon icon={faAngleDoubleRight} beatFade/>
            </div>
            <div className="profile-settings__body__item">
              <FontAwesomeIcon icon={faEdit} />
              <span>Change profile data</span>
              <FontAwesomeIcon icon={faAngleDoubleRight} beatFade/>
            </div>
          </div>
        </div>
        <div className="profile-settings-content">
          <div className="profile-settings__content__img">
            <div
              className="profile-image"
              style={{ backgroundImage: `url(${resources.user})` }}
            >
              <FontAwesomeIcon icon={faCamera} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfilePage;
