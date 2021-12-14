import React, {useState} from "react";
import axios from "axios"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Footer from '../pages/Footer'

export default function Home() {
    return (
        <div>
   <Parallax pages={3} style={{ top: '15', left: '0', backgroundColor: "rgba(223, 186, 186, 0.877)"}}>

<ParallaxLayer
  offset={0}
  speed={2.5}
  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "rgba(223, 186, 186, 0.877)" }}>
   <h1>hi</h1>
</ParallaxLayer>

<ParallaxLayer className='ii' offset={1} speed={4} style={{ backgroundColor: "rgba(61, 47, 47, 0.877)" }} />
<ParallaxLayer
  offset={1}
  speed={0.5}
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}>
<h1>hi baby</h1>
</ParallaxLayer>
<ParallaxLayer className='ii' offset={2} speed={4} style={{ backgroundColor: "rgba(61, 47, 47, 0.877)" }} />

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
