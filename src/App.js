import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import LoginEbay from "./modules/auth/LoginEbay";
import Register from "./modules/auth/Register";
import ViewDetail from "./components/Homepage/ViewDetail";
import { Card } from "./components/Homepage/Card";
import Wishlist from "./components/Homepage/WishList";
import Detail from "./components/Homepage/Detail";

function App() {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/" element={<Homepage />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/login" element={<LoginEbay />} />
          <Route path="/register" element={<Register />} />
          <Route path="/card" element={<Card />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
