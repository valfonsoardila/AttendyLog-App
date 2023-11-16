import "./CustomButton.css";

const CustomButton = (props) => {
  // Puedes desestructurar las propiedades que esperas recibir
  const { type, onClick, text  } = props;
  return (
    <>
      <button className="glow-on-hover" type={type} onClick={onClick}>
            {text}
      </button>
    </>
  );
};

export default CustomButton;