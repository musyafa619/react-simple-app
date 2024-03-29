import "./CustomerCard.css";

function CustomerCard(props) {
  return (
    <div className="card-container">
      <div className="customer-content">
        <img
          className="customer-img"
          src={props.data.avatar}
          alt="Customer Avatar"
        />
        <div className="customer-bio">
          <h4>{props.data.first_name || "Name Placeholder"}</h4>
          <h5>{props.data.email || "Email Placeholder"}</h5>
        </div>
      </div>
    </div>
  );
}

export default CustomerCard;
