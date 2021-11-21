import "./App.css";
import Home from "./pages/Home";
import Customers from "./pages/Customers";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/customers" element={<Customers />} />
      </Routes>
    </div>
  );
}

export default App;
