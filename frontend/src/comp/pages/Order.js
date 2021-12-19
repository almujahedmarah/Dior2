
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Footer from '../pages/Footer'

export default function Order() {
    return (
        <Parallax pages={2} style={{ top: '15', left: '0', backgroundColor: "#F9D6D4"}}>

        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "#F9D6D4" }}>
           <h1>your ORDER</h1>
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
    )
}
