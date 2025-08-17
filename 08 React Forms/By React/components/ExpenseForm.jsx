import { useEffect, useRef, useState } from "react";

function ExpenseForm({ setExpenses }) {
  //   const [title, setTitle] = useState("");
  //   const [category, setCategory] = useState("");
  //   const [amount, setAmount] = useState("");

  {
    /* 
      - On every state varibale change our component re-renders
      - Between the re-renders if we want to persist its value we used useRef although usestate varible also persists or maintain its value but whenever state varibale change its re-render the page but on useRef does'nt trigger re-render on the other hand a normal variable like this (let myNum = 0) it neither re-render the page and not persist its value on every re-render that the basic difference between in all these three types of variables;
      */
  }

  // - Our component does'nt re-render on both this varibale change
  // const myRef = useRef(0);
  // let myNum = 0;

  /* - The most common use of useRef is to ref prop on input so it gives us a DOM access of that particular nore where we put the Ref prop and then we do anything we do in vanilla js like changing color like this myRef.current.style.backgroundColor = "red"; or accessing input value through its value attribut like this myRef.current.value  */

  // const titleRef = useRef(null);
  // const categoryRef = useRef(null);
  // const amountRef = useRef(null);

  // useEffect(() => {
  //   console.log();
  // });

  //Component re-render everytime we change this state variable
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    //State-method

    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ]);

    //UseRef - method

    // setExpenses((prevState) => [
    //   ...prevState,
    //   {
    //     title: titleRef.current.value,
    //     category: categoryRef.current.value,
    //     amount: amountRef.current.value,
    //     id: crypto.randomUUID(),
    //   },
    // ]);

    //Form Method

    // setExpense({
    //   title: "",
    //   category: "",
    //   amount: 0,
    // });
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
          // ref={titleRef}
          onChange={(e) =>
            setExpense((prevState) => ({
              ...prevState,
              title: e.target.value,
            }))
          }
          value={expense.title}
          name="title"
          id="title"
        />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          // ref={categoryRef}
          onChange={(e) =>
            setExpense((prevState) => ({
              ...prevState,
              category: e.target.value,
            }))
          }
          value={expense.category}
          name="category"
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
          // ref={amountRef}
          onChange={(e) =>
            setExpense((prevState) => ({
              ...prevState,
              amount: Number(e.target.value),
            }))
          }
          value={expense.amount}
          name="amount"
          id="amount"
        />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}

export default ExpenseForm;
