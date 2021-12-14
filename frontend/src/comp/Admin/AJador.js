import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function AJador() {
const [jad, setJad] = useState([])

useEffect(()=>{
    axios.get("http://localhost:3001/Admin/collection/61b1df23db2645c13798f3ee")
    .then((res)=>{
     console.log(res.data.Parfume);
     setJad(res.data.Parfume)
    })
},[])


    return (
        <div className='Ajad'>
            <button>Add a new Parfume</button>
            {jad.map((item)=>{
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
