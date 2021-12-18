import React, {useEffect, useState} from "react";
import { BrowserRouter as Router,Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from './Home'
import Jadore from "./Jadore"
import MissD from "./MissD"
import Joy from "./Joy"
import Cart from './Cart'
import User from '../user/User'
import Login from '../Admin/Login'
import axios from "axios";

// import './App.css'
export default function Nav() {
    const navigate1 = useNavigate();
    const [Coll, setColl] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/Admin/collection").then((res) => {
          console.log(res.data);
          setColl(res.data);
        });
      }, []);

    return (
        <div className="nav">
            <ul>
                < Link className="link"  to="/">Dior</Link>
                {Coll.map((item)=>{
                    return(
                < Link  className="link"  to={`/${item.name}/${item._id}`}>{item.name}</Link>
                    )
                })}
                {/* < Link  className="link"  to="/MissD">Miss Dior</Link>
                < Link  className="link"  to="/Joy">Joy</Link> */}
                < Link  className="link"  to="/User">User</Link>
                < Link  className="link"  to="/Cart">Cart</Link>
                < Link  className="link"  to="/Login">Admin</Link>
            </ul>
        </div>
    )
}
