// const h2 = React.createElement(
//   "h2",
//   { className: "subheading" },
//   "Hello React"
// );

const h2 = {
    $$typeof: Symbol.for("react.element"),
    type: "h2",
    key: null,
    ref: null,
    props: {
      className: "subheading",
      children: "Hello React",
    },
  };

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(h2);


// const h2 = document.createElement("h2");
// h2.innerText = "hello React";

// document.querySelector("#root").append(h2);
