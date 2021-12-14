import React from 'react'
import './App.css';
import Nav from './comp/pages/Nav'
import Jadore from "./comp/pages/Jadore"
import MissD from "./comp/pages/MissD"
import Joy from "./comp/pages/Joy"
import Cart from './comp/pages/Cart'
import User from './comp/user/User'
import Login from './comp/Admin/Login'
import AHome from './comp/Admin/AHome'
import AJador from './comp/Admin/AJador'
import AJoy from './comp/Admin/AJoy'
import AMissD from './comp/Admin/AMissD'

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
         <Route path="/Login" element={<Login />}></Route>
         <Route path="/AHome" element={<AHome />}></Route>
         <Route path="/AJador" element={<AJador />}></Route>
         <Route path="/AJoy" element={<AJoy />}></Route>
         <Route path="/AMissD" element={<AMissD />}></Route>
        </Routes>
    
    </div>
  )
}
