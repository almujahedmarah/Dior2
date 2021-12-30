import React, {useEffect, useState} from "react";
import { BrowserRouter as Router,Routes, Route, Link, useNavigate } from "react-router-dom";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LoginIcon from '@mui/icons-material/Login';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LogoutIcon from '@mui/icons-material/Logout';
import Home from './Home'
import Jadore from "./Jadore"
import MissD from "./MissD"
import Cart from './Cart'
import User from '../user/User'
import Login from '../Admin/login'
import axios from "axios";

// import './App.css'
export default function Nav() {
    const navigate = useNavigate();
    const [Coll, setColl] = useState([]);
    const id = localStorage.getItem("id");

    const logout =() =>{
        console.log("ggg")
        localStorage.removeItem("id")
        localStorage.removeItem("token")
        navigate("/")
       
        }

    useEffect(() => {
        axios.get("/Admin/collection").then((res) => {
          console.log(res.data);
          setColl(res.data);
        });
      }, []);

    return (
        <div className="nav">
            <ul>
                < Link className="link"  to="/"><h2>DIOR</h2></Link>
                
                {Coll.map((item)=>{
                    return(
                < Link  className="link"  to={`/collection/${item._id}`}>{item.name}</Link>
                    )
                })}
                {/* < Link  className="link"  to="/MissD">Miss Dior</Link>
                < Link  className="link"  to="/Joy">Joy</Link> */}
                < Link  className="link"  to="/User">{id ==undefined?<LoginIcon/>:< LogoutIcon onClick={logout}/>}</Link>
                < Link  className="link"  to="/Cart"><AddShoppingCartIcon/></Link>
                < Link  className="link"  to="/Order"><LocalMallIcon/></Link>
                < Link  className="link"  to="/Login"><AdminPanelSettingsIcon/></Link>
                {/* {id!=null?<LoginIcon/>:<LogoutIcon/>} */}
            </ul>
        </div>
    )
}
