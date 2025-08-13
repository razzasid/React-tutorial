import { useState } from "react";

function ExpenseForm({ setExpenses }) {
  //   const [title, setTitle] = useState("");
  //   const [category, setCategory] = useState("");
  //   const [amount, setAmount] = useState("");

  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ]);

    setExpense({
      title: "",
      category: "",
      amount: 0,
    });
    // const expense = { ...getFormData(e.target), id: crypto.randomUUID() };
    // setExpenses((prevExpenses) => [...prevExpenses, expense]);
    // e.target.reset();
  };

  //   const getFormData = (form) => {
  //     const formData = new FormData(form);
  //     const data = {};
  //     for (const [key, value] of formData.entries()) {
  //       data[key] = value;
  //     }
  //     return data;
  //   };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          onChange={(e) =>
            setExpense((prevState) => ({ ...prevState, title: e.target.value }))
          }
          value={expense.title}
          //   name="title"
          id="title"
        />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          onChange={(e) =>
            setExpense((prevState) => ({
              ...prevState,
              category: e.target.value,
            }))
          }
          value={expense.category}
          //   name="category"
          id="category"
        >
          <option hidden>Select Category</option>
          <option value="Grocery">Grocery</option>
          <option value="Clothes">Clothes</option>
          <option value="Bills">Bills</option>
          <option value="Education">Education</option>
          <option value="Medicine">Medicine</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          onChange={(e) =>
            setExpense((prevState) => ({
              ...prevState,
              amount: Number(e.target.value),
            }))
          }
          value={expense.amount}
          //   name="amount"
          id="amount"
        />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}

export default ExpenseForm;
