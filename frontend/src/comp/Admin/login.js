import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Footer from '../pages/Footer'


export default function LogIn() {
    const navigate= useNavigate()
    const [userg ,setUserg] = useState('')
    const [emailg ,setEmailg] = useState([])
    const [passg ,setPassg] = useState([])

    const handlesubg = (e) =>{
      e.preventDefault()
      axios.post("/Admin/login", {email:emailg, password:passg})
      .then( (response) => {
        console.log(response.data);
        localStorage.setItem("token", response.data.token)
        localStorage.setItem("id", response.data.id)

      setUserg(response.data)
        navigate("/AHome")
      })
  }
    return (
        <div>
 <Parallax pages={2} style={{ top: '15', left: '0', backgroundColor: "#F9D6D4"}}>

<ParallaxLayer
  offset={0}
  speed={2.5}
  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "#F9D6D4" }}>
            <div className="sup-main">
            <div className="input">
                <h2>Login</h2>
                <div className="oo">
            <div >
            <input type="email" placeholder="email" className="name" onChange={(e)=>setEmailg(e.target.value)} />
            </div>
            <div className="s-input">
            <input type="password" placeholder="password" className="name" onChange={(e)=>setPassg(e.target.value)} />
            </div>
            </div>
            <button className="singup" type="submit" onClick={(e => handlesubg(e))} >Login</button>
            </div>
            </div>
</ParallaxLayer>

<ParallaxLayer className='ii' offset={1} speed={2} style={{ backgroundColor: "#AD867B" }} />

<ParallaxLayer
  offset={1}
  speed={0.5}
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}>
< Footer />
</ParallaxLayer>
</Parallax>
        </div>
    )
}
