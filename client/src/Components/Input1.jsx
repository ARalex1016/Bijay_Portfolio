const Input1 = ({ type = "text", placeholder = "", value, name, onChange }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={(e) => onChange(e)}
        className="w-52 md:w-60 h-10 text-lg rounded-md border-none outline-none pl-4"
      />
    </>
  );
};

export default Input1;
