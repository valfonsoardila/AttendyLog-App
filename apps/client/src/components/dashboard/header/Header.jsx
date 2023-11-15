import { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCaretDown,
  faCaretUp,
  faLanguage,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Header = () => {
  const [openHeader, setOpenHeader] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const changeOpenSearch = () => {
    setOpenSearch(!openSearch);
  };
  const changeOpenHeader = () => {
    setOpenHeader(!openHeader);
  };
  return (
    <div
      className="header-container"
      style={{ height: openHeader ? "50px" : "fit-content" }}
    >
      <FontAwesomeIcon
        icon={faCaretDown}
        title="Desplegar encabezado"
        onClick={changeOpenHeader}
        style={{ display: openHeader ? "none" : "block" }}
      />
      <FontAwesomeIcon
        icon={faCaretUp}
        title="Desplegar encabezado"
        onClick={changeOpenHeader}
        style={{ display: openHeader ? "block" : "none" }}
      />
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: openHeader ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="header"
        style={{ display: openHeader ? "flex" : "none" }}
      >
        <div className="header-title">
          <h1>Mi nombre</h1>
        </div>
        <div className="header-body">
          <div
            className="header-container-search"
            style={{ width: openSearch ? "fit-content" : "24%" }}
          >
            <div
              className="header-body-search"
            >
              <input
                type="text"
                placeholder="Buscar"
                style={{ display: openSearch ? "none" : "flex" }}
              />
              <FontAwesomeIcon icon={faSearch} onClick={changeOpenSearch} />
            </div>
          </div>
          <div className="header-body-item">
            <FontAwesomeIcon icon={faLanguage} />
          </div>
          <div className="header-body-item">
            <FontAwesomeIcon icon={faBell} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
