import React, { useState, useEffect } from "react";
import CustomerCard from "../../components/CustomerCard";
import "./customers.css";
import axios from "axios";

function Customers() {
  const [listCustomers, setListCustomers] = useState([]);
  const [filteredListCustomer, setFilteredListCustomer] = useState([]);
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("");

  const getListCustomer = () => {
    axios.get("https://reqres.in/api/users?page=2").then((res) => {
      setListCustomers(res.data.data);
      setFilteredListCustomer(res.data.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getListCustomer();
  }, []);

  useEffect(() => {
    const newFilteredCustomer = listCustomers.filter((customer) =>
      customer.first_name.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredListCustomer(newFilteredCustomer);
    // eslint-disable-next-line
  }, [keyword]);

  return (
    <div className="customers-container">
      <h2>Customers</h2>
      <input
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
        type="text"
        className="search-input"
        name="search"
        placeholder="Search Customer"
      />
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <React.Fragment>
          {filteredListCustomer.map((product, index) => (
            <CustomerCard data={product} key={index} />
          ))}
        </React.Fragment>
      )}
    </div>
  );
}

export default Customers;
