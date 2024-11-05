import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import LoginEbay from "./modules/auth/LoginEbay";
import Register from "./modules/auth/Register"
import Detail from "./components/Homepage/Detail";

function App() {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginEbay />} />
          <Route path="/register" element={<Register />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
