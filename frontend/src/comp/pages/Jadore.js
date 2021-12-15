import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import axios from 'axios'
import { useState,useEffect  } from 'react'
import Footer from './Footer'

export default function Jadore() {
const [jador, setJador] = useState([])

useEffect(()=>{
    axios.get("http://localhost:3001/Dior/collection/61b1df23db2645c13798f3ee")
    .then((res)=>{
        console.log(res.data.Parfume);
        setJador(res.data.Parfume)
    })
},[])
console.log(jador)

const alignCenter = { display: 'flex', alignItems: 'center' }

    return (
        <div>
 <div className="backgroundjad" />
<Parallax pages={3.7} top={10}>
<ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' , backgroundImage:`url("https://i.ibb.co/M56JwHD/Magical-Music-Venues.jpg")` , backgroundSize:"cover", height:"550px" }}>
<div className='jadortitl'>
<h1>J'ADORE</h1>
<p className='jadop'>Life is gold</p>
</div>
</ParallaxLayer>

<ParallaxLayer sticky={{ start: 1, end:4}} style={{ ...alignCenter, justifyContent: 'flex-start'}}>
  <div >
    <img className="jadorimg" src="https://i.ibb.co/N30YQMC/IMG-8550.jpg"/>
  </div>
</ParallaxLayer>


<ParallaxLayer offset={2} speed={0.5}  style={{ ...alignCenter, justifyContent: 'flex-end' }}>
        <div className='yyyy' >
        {jador.map((item)=>{
              return(
                  <div className="jadorc">
                  <img className='jadimg' src={item.image}/>
                  <div className='jad'>
                  <h4 className='jname'>{item.name}</h4>
                  <p className='jpric'>${item.price}</p>
                  <button className='jbutton' type="submit">pay me</button>
                  {/* <hr/> */}
                  </div>
                  </div>
              )
          })}
        </div>

      </ParallaxLayer>
</Parallax>
        </div>
    )
}
