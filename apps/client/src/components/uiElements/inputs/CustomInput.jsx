import "./CustomInput.css";

const CustomInput = (props) => {
  // Puedes desestructurar las propiedades que esperas recibir
  const { type, id, name, placeholder, value, onChange } = props;
  return (
    <>
      <input type={type} id={id} name={name} placeholder={placeholder} value={value} onChange={onChange} />
    </>
  );
};

export default CustomInput;
