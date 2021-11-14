import "./ProductCard.css";
import { useState } from "react";

function ProductCard(props) {
  const [qty, setQty] = useState(0);

  const handlePlus = () => {
    setQty(qty + 1);
  };

  const handleMinus = () => {
    if (qty > 0) {
      setQty(qty - 1);
    }
  };

  return (
    <div className="card-container">
      <div className="product-content">
        <img
          className="product-img"
          src={props.data.img}
          alt="Product Preview"
        />
        <h4>{props.data.name || "Name Placeholder"}</h4>
      </div>
      <div className="qty-container">
        <button onClick={handleMinus} className="qty-controller">
          -
        </button>
        <b>{qty}</b>
        <button onClick={handlePlus} className="qty-controller">
          +
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
