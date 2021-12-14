import { useNavigate } from "react-router-dom";
import axios from "axios"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Footer from '../pages/Footer'
import React, {useEffect, useState} from 'react'

export default function AHome() {
    const navigate1= useNavigate()

    const [Coll, setColl] = useState([])

    useEffect(()=>{
      axios.get("http://localhost:3001/Admin/collection")
      .then((res)=>{
       console.log(res.data);
       setColl(res.data)
      })
  },[])

    const jadorpage =(id)=>{
      navigate1(`/${id}`)
    }


    return (
        <div>
        <Parallax pages={3} style={{ top: '15', left: '0', backgroundColor: "rgba(223, 186, 186, 0.877)"}}>
       <ParallaxLayer
         offset={0}
         speed={1}
         style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "rgba(223, 186, 186, 0.877)" }}>
                  <h1>hi admin</h1>
       </ParallaxLayer>
       
       <ParallaxLayer className='ii' offset={1} speed={0.1} style={{ backgroundColor: "rgba(61, 47, 47, 0.877)" }} />
       <ParallaxLayer
         offset={1}
         speed={0.5}
         style={{
           display: 'flex',
           justifyContent: 'center',
           alignItems: 'center',
         }}>
           <div className="adminhome">
          {Coll.map((col)=>{
            return(
            <div >
            <h2 className="Aht">{col.name}</h2>
          <img className="Ah" onClick={()=>jadorpage(col._id)} src={col.img} />
          </div>

            )
          })}
          </div>
       </ParallaxLayer>
       <ParallaxLayer className='ii' offset={2} speed={1.0} style={{ backgroundColor: "rgba(61, 47, 47, 0.877)" }} />

       <ParallaxLayer
         offset={2}
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

