import "./ProductCard.css";

function ProductCard(props) {
  return (
    <div className="card-container">
      <div className="product-content">
        <img
          className="product-img"
          src={
            props.img ||
            "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80"
          }
          alt="productImg"
        />
        <h4>{props.name || "Name Placeholder"}</h4>
      </div>
      <div className="qty-container">
        <button className="qty-controller">+</button>
        <b>0</b>
        <button className="qty-controller">-</button>
      </div>
    </div>
  );
}

export default ProductCard;
