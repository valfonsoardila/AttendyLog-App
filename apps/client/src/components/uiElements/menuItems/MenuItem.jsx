import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuItem = (props) => {
    const { faIcon, text, hover, handleDashboardClick } = props
  return (
    <>
        <FontAwesomeIcon icon={faIcon} fade />
          <span
            style={{ display: hover ? "flex" : "none" }}
            onClick={handleDashboardClick}
          >
            {text}
          </span>
    </>
  )
}

export default MenuItem