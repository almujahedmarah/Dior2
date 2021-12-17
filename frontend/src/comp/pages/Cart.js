import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function Cart() {
 const [create , setCreate] = useState([]) 
//  const [cart , setCart] = useState(true)


 useEffect(() =>{
     axios.get("http://localhost:3001/user/cart/61b0adb59cbcf108ef78c640")
     .then((res) =>{
         console.log(res.data.cart)
         setCreate(res.data.cart)
        //  setCart(false)
     })
 },[])
    return (
        <div>
            
        </div>
    )
}
