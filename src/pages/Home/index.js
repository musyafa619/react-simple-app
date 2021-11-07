import ProductCard from "../../components/ProductCard";
import "./home.css";

// const listProduct = [
//   {
//     name: "Product 1",
//     img: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
//   },
//   {
//     name: "Product 2",
//     img: "https://images.unsplash.com/photo-1549298916-f52d724204b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1713&q=80",
//   },
//   {
//     name: "Product 3",
//     img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1625&q=80",
//   },
// ];

function Home() {
  return (
    <div className="home-container">
      <h2>React Simple Cart</h2>
      <ProductCard />
    </div>
  );
}

export default Home;
