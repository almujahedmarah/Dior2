import React from 'react'
import './App.css';
import Nav from './comp/pages/Nav'
import Jadore from "./comp/pages/Jadore"
import MissD from "./comp/pages/MissD"
import Joy from "./comp/pages/Joy"
import Cart from './comp/pages/Cart'
import User from './comp/user/User'

import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Nav />
      
      < Routes>
         {/* <Route exact="true" path="/" element={<Hhh />}></Route> */}
         <Route path="/Jadore" element={<Jadore />}></Route>
         <Route path="/MissD" element={<MissD />}></Route>
         <Route path="/Joy" element={<Joy />}></Route>
         <Route path="/Cart" element={<Cart />}></Route>
         <Route path="/User" element={<User />}></Route>
        </Routes>
    
    </div>
  )
}
