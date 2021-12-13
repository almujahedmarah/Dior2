import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import axios from 'axios'
import { useState,useEffect  } from 'react'
import Footer from './Footer'


export default function Joy() {
 const [joy, setJoy] = useState([])

 useEffect(() => {
        axios.get('http://localhost:3001/Dior/collection/61b1dc8adb2645c13798f3c4')
        .then((res) =>{
        //   console.log(res.data.Parfume);
          setJoy(res.data.Parfume);
          console.log(joy)
        })
        // console.log(joy);
      },[])
  //   =================================================
  const alignCenter = { display: 'flex', alignItems: 'center' }

    return (
        <div>
     <div className="backgroundjay" />

  <Parallax pages={3}>
  <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' , backgroundImage:`url("https://i.ibb.co/BTLwPmp/Coffeenuts-Photo.jpg")` ,height:"590px"}}>
    <h1 className='joytitle'>Joy by Dior</h1>
  </ParallaxLayer>

  <ParallaxLayer sticky={{ start: 1, end: 3 }} style={{ ...alignCenter, justifyContent: 'flex-start'}}>
    <div className="joys">
      <img className='joy1000'  src="https://i.pinimg.com/474x/91/53/f7/9153f7fdcf0d26f60425f16604e2c89b.jpg"/>
    </div>
  </ParallaxLayer>
  
  
<ParallaxLayer offset={1.5} speed={0.5} gap={10} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className='joymap' >
          {joy.map((item)=>{
                return(
                    <div className="mm">
                    <img className='pimg'  src={item.image}/>
                    <div className='joyflex'>
                    <h2 className='pname'>{item.name}</h2>
                    <p className='ppric'>${item.price}</p>
                    <button className='pbutton' type="submit">pay me</button>
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
