import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cartTotal, setCartTotal] = useState(0);
  const incrementCartTotal = (amount) => setCartTotal(cartTotal + amount);
  
  const [cartContents, setCartContents] = useState([]);
  const incrementCartContents = (itemName) => setCartContents([...cartContents, itemName]);

  return (
    <div className="App">
      <div id="Bakery">
        <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

        {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
          <BakeryItem key={index} name={item.name} image={item.image} price={item.price} incrementCartTotal={(amount) => incrementCartTotal(amount)} incrementCartContents={(itemName) => incrementCartContents(itemName)}/>
        ))}
      </div>

      <div>
        <h2>Cart</h2>
        <ul>
          {cartContents.map((item, index) => ( // TODO: map cartContents to list items
            <li key={index}>{item}</li>
          ))}
        </ul>
        Total: ${cartTotal}
      </div>
    </div>
  );
}

export default App;
