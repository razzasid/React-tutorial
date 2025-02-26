import { createRoot } from "react-dom/client";
import React from "react";
import "./style.css";

function Card(props) {
  const { title, image, brand, price } = props;
  return (
    <div className="card">
      <img src={image} alt="iphone" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>
          <b>${price}</b>
        </p>
      </div>
    </div>
  );
}
const root = createRoot(document.getElementById("root"));

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.products);

    root.render(
      <div className="container">
        {data.products.map((product) => {
          return (
            <Card
              key={product.id}
              title={product.title}
              image={product.thumbnail}
              brand={product.brand}
              price={product.price}
            />
          );
        })}
      </div>
    );
  });

// root.render({
//   $$typeof: Symbol.for("react.element"),
//   type: Card,
//   ref: null,
//   props: {
//     title: "Iphone",
//     image:
//       "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
//     brand: "Apple",
//     price: 999,
//   },
// });

// from this 👇 to this👆
// root.render(
//   React.createElement(Card, {
//     title: "iphone",
//     image:
//       "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
//     brand: "Apple",
//     price: "999",
//   })
// );

// from this 👇 to this👆
// root.render(
//   <Card
//     title="iphone"
//     image="https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"
//     brand="Apple"
//     price="999"
//   />
// );

// console.log(
//   <Card
//     title="iphone"
//     image="https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"
//     brand="Apple"
//     price="999"
//   />
// );
