import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
// web pack (Module Bundler) always searches for resources only in public folder..
function Pizza({ pizzaObj }) {
  console.log(pizzaObj);
  // if (pizzaObj.soldOut) {
  //   return null;
  // } else
  return (
    <div className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt="pizza" />
      <li>
        <h2>{pizzaObj.name}</h2>
        <p>{pizzaObj.ingredients}</p>
        <h4>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</h4>
      </li>
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1 style={{}}>FAST React Pizza Co.</h1>
    </div>
  );
}
function Menu() {
  const pizzas = pizzaData;
  const numLength = pizzas.length;
  return (
    <div className="menu">
      <h2>Our MENU</h2>

      {numLength > 0 && (
        <>
          <p>Authentic italian cusine </p>
          <ul className="pizzas">
            {pizzaData.map(
              (
                pizza //we cannot use forEach,because we acutally need all the jsx here, what map does it keeps all the jsx here,it is same as what writing each component one by one here means
              ) => (
                <Pizza pizzaObj={pizza} key={pizza.name} />
              )
            )}
          </ul>
        </>
      )}
    </div>
  );
}
function Footer() {
  return (
    <div>
      <p className="footer,order">
        {new Date().toLocaleTimeString()}.We are open
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
//React v18 and upper
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
