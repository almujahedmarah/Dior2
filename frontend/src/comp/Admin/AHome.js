import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Footer from '../pages/Footer'

export default function AHome() {
    const navigate1= useNavigate()
    const navigate2= useNavigate()
    const navigate3= useNavigate()

    const jadorpage =()=>{
      navigate1("/AJador")
    }

    const misspage =()=>{
      navigate2("/AMissD")
    }

    const joypage =()=>{
      navigate3("/AJoy")
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
            <div >
              <h2 className="Aht">J'ADORE</h2>
          <img className="Ah" onClick={jadorpage} src="https://i.ibb.co/N7ZD2YV/IMG-8552.jpg" />
          </div>
          <div >
            <h2 className="Aht">Miss Dior</h2>
          <img className="Ah" onClick={misspage} src="https://i.ibb.co/y4PN7cf/IMG-8604.jpg" />
          </div>
          <div >
            <h2 className="Aht">JOY</h2>
          <img className="Ah" onClick={joypage} src="https://i.pinimg.com/474x/ff/18/9e/ff189e16bbb7955fde1ad5e0a9d35012.jpg" />
          </div>
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
