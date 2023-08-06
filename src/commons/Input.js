const Input = ({
  type,
  className,
  name,
  placeholder,
  onChange = () => {},
  value,
}) => {
  return (
    <>
      <input
        type={type}
        className={className}
        name={name}
        placeholder={placeholder}
        required
        onChange={onChange}
        value={value}
      />
    </>
  );
};
export default Input;
