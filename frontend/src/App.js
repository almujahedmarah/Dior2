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
import AMissD from './comp/Admin/CRUD/AMissD'
import Addmiss from './comp/Admin/CRUD/Addmiss'
import Editmiss from './comp/Admin/CRUD/Editmiss'
import Home from './comp/pages/Home'
import Error from './comp/pages/Error';
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Nav />
      
      < Routes>
         <Route exact="true" path="/" element={<Home />}></Route>
         <Route path="/Jadore" element={<Jadore />}></Route>
         <Route path="/MissD" element={<MissD />}></Route>
         <Route path="/Joy" element={<Joy />}></Route>
         <Route path="/Cart" element={<Cart />}></Route>
         <Route path="/User" element={<User />}></Route>
         <Route path="/Login" element={<Login />}></Route>
         <Route path="/AHome" element={<AHome />}></Route>
         <Route path="/:colId" element={<AMissD />}></Route>
         <Route path="/Addmiss/:colId" element={<Addmiss />}></Route>
         <Route path="/Editmiss/:colId /:id" element={<Editmiss />}></Route>
         <Route path="*" element={<Error/>}></Route>
        </Routes>
    
    </div>
  )
}
