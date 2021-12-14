import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function AMissD() {
const [miss, setMiss] = useState([])

useEffect(()=>{
    axios.get("http://localhost:3001/Admin/collection/61b1ddbbdb2645c13798f3ce")
    .then((res)=>{
     console.log(res.data.Parfume);
     setMiss(res.data.Parfume)
    })
},[])
    return (
        <div >
               <button>Add a new Parfume</button>
            {miss.map((item)=>{
                return(
                    <div>
                    <img src={item.image}/>
                    <h3>{item.name}</h3>
                    <h6>{item.price}</h6>
                    <button>edit</button>
                    <button>delet</button>
                    </div>
                )
            })}
        </div>
    )
}
