import React from "react";
import "./App.css";
import Nav from "./comp/pages/Nav";
import Jadore from "./comp/pages/Jadore";
import MissD from "./comp/pages/MissD";
import Cart from "./comp/pages/Cart";
import User from "./comp/user/User";
import Login from "./comp/admin/Login";
import AHome from "./comp/admin/AHome";
import Prodact from "./comp/admin/CRUD/Prodact";
import Addprodact from "./comp/admin/CRUD/Addprodact";
import Editprodact from "./comp/admin/CRUD/Editprodact";
import Home from "./comp/pages/Home";
import Error from "./comp/pages/Error";
import Order from "./comp/pages/Order"
import Details from "./comp/pages/Details";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//kk
export default function App() {
  return (
    <div>
      <Nav />

      <Routes>
        <Route exact="true" path="/" element={<Home />}></Route>
        {/* <Route path="/collection/:colId" element={<Jadore />}></Route> */}
        <Route path="/collection/:colId" element={<MissD />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/User" element={<User />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/AHome" element={<AHome />}></Route>
        <Route path="/:colId" element={<Prodact />}></Route>
        <Route path="/Addprodact/:colId" element={<Addprodact />}></Route>
        <Route path="/Editprodact/:colId/:id" element={<Editprodact />}></Route>
        <Route path="*" element={<Error />}></Route>
        <Route path="/Order" element={<Order />}></Route>
        <Route path="/Details/:colId/:id" element={<Details />}></Route>
      </Routes>
    </div>
  );
}
