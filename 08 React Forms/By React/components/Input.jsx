function Input({ value, id, onChange, label, name, error }) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input onChange={onChange} value={value} name={name} id={id} />
      <p className="error">{error}</p>
    </div>
  );
}

export default Input;
