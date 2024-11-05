import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import LoginEbay from "./modules/auth/LoginEbay";
import Register from "./modules/auth/Register";
import ViewDetail from "./components/Homepage/ViewDetail";
import { Cart } from "./components/Homepage/Cart";

function App() {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/" element={<Homepage />} />
          <Route path="/detail/:id" element={<ViewDetail />} />
          <Route path="/login" element={<LoginEbay />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
