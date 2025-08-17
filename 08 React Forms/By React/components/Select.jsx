function Select({
  value,
  id,
  onChange,
  label,
  name,
  error,
  defaultOption,
  options,
}) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <select onChange={onChange} value={value} name={name} id={id}>
        {defaultOption && <option hidden>{defaultOption}</option>}
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <p className="error">{error}</p>
    </div>
  );
}

export default Select;
