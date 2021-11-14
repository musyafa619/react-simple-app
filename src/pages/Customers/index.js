import CustomerCard from "../../components/CustomerCard";
import "./customers.css";

const listCustomers = [
  {
    name: "Brian",
    img: "https://reqres.in/img/faces/8-image.jpg",
  },
  {
    name: "Josee",
    img: "https://reqres.in/img/faces/7-image.jpg",
  },
  {
    name: "Lil Skrrr",
    img: "https://reqres.in/img/faces/11-image.jpg",
  },
];

function Customers() {
  return (
    <div className="customers-container">
      <h2>Customers</h2>
      <input
        type="text"
        className="search-input"
        name="search"
        placeholder="Search Customer"
      />
      {listCustomers.map((product, index) => (
        <CustomerCard data={product} key={index} />
      ))}
    </div>
  );
}

export default Customers;
