import React from "react";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import Logout from "./Logout";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="*" element={<h1>404 Error page</h1>}></Route>
      </Routes>
    </div>
  );
};

export default App;
