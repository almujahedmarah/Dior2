import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


export default function User() {

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [name,setName] =useState("")
    const [user, setUser] = useState([])
//============================LOGIN-=====================================================================================
       const navigate= useNavigate()
      const [userg ,setUserg] = useState('')
      const [emailg ,setEmailg] = useState([])
      const [passg ,setPassg] = useState([])

      const handlesubg = (e) =>{
        e.preventDefault()
        axios.post(" http://localhost:3001/user/login", {email:emailg, password:passg})
        .then( (response) => {
          console.log(response.data);
          localStorage.setItem("token", response.data.token)
          localStorage.setItem("id", response.data.id)

        setUserg(response.data)
          navigate("/Joy")
          alert("Hello!! welcom");
        })
    }
//===========SINGUP==============================================================================================

  

    const handlesub =()=>{
        axios.post(" http://localhost:3001/user/signup", {email:email, password:pass, name:name})
        .then( (res) =>{
            console.log(res.data);
            setUser([...user,res.data])
        })
            //   navigate("/")
            //   alert("Hello!! welcom");
    }

// =============================================================================================================
    return (
        <div>
            <Parallax pages={2} style={{ top: '15', left: '0', backgroundColor: "rgba(223, 186, 186, 0.877)"}}>

<ParallaxLayer
  offset={0}
  speed={2.5}
  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "rgba(223, 186, 186, 0.877)" }}>
            <div className="sup-main">
            <div className="input">
                <h2>Singup</h2>
                <div className="oo">
            <div >
            <input type="text" placeholder="name" className="name" onChange={(e)=>setName(e.target.value)} />
            <div className="ss-in"> 
            <input type="email" placeholder="email" className="name" onChange={(e) =>setEmail(e.target.value) } />
            </div>
            </div>
            <div className="s-input">
            <input type="password" placeholder="password" className="name" onChange={(e)=>setPass(e.target.value)}/>
            </div>
            </div>
            <button className="singup" type="submit" onClick={(e) =>handlesub(e)}>Singup</button>
            </div>
            </div>
</ParallaxLayer>

<ParallaxLayer className='ii' offset={1} speed={2} style={{ backgroundColor: "rgba(61, 47, 47, 0.877)" }} />

<ParallaxLayer
  offset={1}
  speed={0.5}
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}>
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
</Parallax>
        </div>
    )
}