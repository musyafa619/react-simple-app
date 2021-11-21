import "./App.css";
import Home from "./pages/Home";
import Customers from "./pages/Customers";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute redirectTo={"/login"}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/customers"
          element={
            <ProtectedRoute redirectTo={"/login"}>
              <Customers />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

function getToken() {
  return localStorage.getItem("token");
}

function ProtectedRoute({ children, redirectTo }) {
  let token = getToken();
  return token ? children : <Navigate to={redirectTo} />;
}

export default App;
