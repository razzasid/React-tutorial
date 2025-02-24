// const h2 = React.createElement(
//   "h2",
//   { className: "subheading" },
//   "Hello React"
// );

// const h2 = {
//     $$typeof: Symbol.for("react.element"),
//     type: "h2",
//     key: null,
//     ref: null,
//     props: {
//       className: "subheading",
//       children: "Hello React",
//     },
//   };

// const container = React.createElement(
//     'div',
//     { className: 'container', id: 'container' },
//     [
//       React.createElement('section', { key: 1 }, [
//         React.createElement(
//           'p',
//           { key: 1 },
//           'The library for web and native user interfaces'
//         ),
//         React.createElement('img', {
//           key: 2,
//           style: {
//             width: 200,
//             backgroundColor: 'teal',
//             borderRadius: 8,
//             padding: 16,
//           },
//           src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
//         }),
//       ]),
//       React.createElement('section', { key: 2 }, [
//         React.createElement('form', { key: 1 }, [
//           React.createElement('div', {className: 'input-group', key: 1}, [
//             React.createElement(
//               'label',
//               { key: 1, htmlFor: 'username' },
//               'Username'
//             ),
//             React.createElement('input', { key: 2, id: 'username' }),
//           ]),
//           React.createElement('div', {className: 'input-group', key: 2}, [
//             React.createElement(
//               'label',
//               { key: 1, htmlFor: 'password' },
//               'Password'
//             ),
//             React.createElement('input', { key: 2, id: 'password', type: 'password' }),
//           ]),
//         ]),
//       ]),
//     ]
//   )

const container = (
  <div className="container" id="container">
    <section>
      <p>The library for web and native user interfaces</p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        style={{
          width: 300,
          backgroundColor: "teal",
          borderRadius: 8,
          padding: 16,
        }}
      />
    </section>
    <section>
      <form>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input id="username" />
        </div>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input id="username" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" />
        </div>
      </form>
    </section>
  </div>
);

console.log(container);
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(container);

// const h2 = document.createElement("h2");
// h2.innerText = "hello React";

// document.querySelector("#root").append(h2);
