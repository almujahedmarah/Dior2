import React from 'react'
import axios from 'axios'
import { useState,useEffect  } from 'react'
import Footer from './Footer'


export default function MissD() {
    return (
        <div>
            <h1>hi</h1>
        </div>
    )
}


// const [jador, setJador] = useState([])

// useEffect(()=>{
//     axios.get("http://localhost:3001/Dior/collection/61b1ddbbdb2645c13798f3ce")
//     .then((res)=>{
//         console.log(res.data.Parfume);
//         setJador(res.data.Parfume)
//     })
// },[])
// console.log(jador)