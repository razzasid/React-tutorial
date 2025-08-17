import { useEffect, useRef, useState } from "react";
import Input from "./Input";
import Select from "./Select";

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
    email: "",
  });

  //validate form
  const [errors, setErrors] = useState({});

  const validationConfig = {
    title: [
      { required: true, message: "Please enter a title" },
      { minLength: 5, message: "Title shoudld be atleast 5 characters long" },
    ],
    category: [{ required: true, message: "Please select a category" }],
    amount: [
      { required: true, message: "Please enter an amount" },
      { isNumber: true, message: "Please enter a number" },
    ],
    email: [
      { required: true, message: "Please enter an email" },
      {
        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: "Please enter a valid email",
      },
    ],
  };

  const validate = (formData) => {
    const errorsData = {};

    // console.log(Object.entries(formData));

    Object.entries(formData).forEach(([key, value]) => {
      // console.log(key, value);
      validationConfig[key].some((rule) => {
        if (rule.required && !value) {
          errorsData[key] = rule.message;
          return true;
        }
        if (rule.minLength && value.length < 5) {
          errorsData[key] = rule.message;
          return true;
        }
        if (rule.pattern && !rule.pattern.test(value)) {
          errorsData[key] = rule.message;
          return true;
        }

        if (rule.isNumber && !Number(value)) {
          errorsData[key] = rule.message;
          return true;
        }
      });
    });

    setErrors(errorsData);
    return errorsData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validateResult = validate(expense);
    // console.log(validate(expense));

    // console.log(Object.keys(validateResult).length);
    if (Object.keys(validateResult).length) return;

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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setExpense((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <Input
        label="Title"
        id="title"
        name="title"
        value={expense.title}
        onChange={handleChange}
        error={errors.title}
      />
      <Select
        id="category"
        label="category"
        name="category"
        value={expense.category}
        onChange={handleChange}
        error={errors.category}
        options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
        defaultOption="Select Category"
      />
      <Input
        label="Amount"
        id="amount"
        name="amount"
        value={expense.amount}
        onChange={handleChange}
        error={errors.amount}
      />

      <Input
        label="Email"
        id="email"
        name="email"
        value={expense.email}
        onChange={handleChange}
        error={errors.email}
      />
      <button className="add-btn">Add</button>
    </form>
  );
}

export default ExpenseForm;
