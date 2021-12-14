import react from "react";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import Home from './Home'
import Jadore from "./Jadore"
import MissD from "./MissD"
import Joy from "./Joy"
import Cart from './Cart'
import User from '../user/User'
import Login from '../Admin/Login'

// import './App.css'
export default function Nav() {
    return (
        <div className="nav">
            <ul>
                < Link className="link"  to="/">Dior</Link>
                < Link  className="link"  to="/Jadore">Jadore</Link>
                < Link  className="link"  to="/MissD">Miss Dior</Link>
                < Link  className="link"  to="/Joy">Joy</Link>
                < Link  className="link"  to="/User">User</Link>
                < Link  className="link"  to="/Cart">Cart</Link>
                < Link  className="link"  to="/Login">Admin</Link>
            </ul>
        </div>
    )
}
