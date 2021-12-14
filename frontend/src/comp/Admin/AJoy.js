import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function AJoy() {
const [joy, setJoy] = useState([])

useEffect(()=>{
    axios.get(" http://localhost:3001/Admin/collection/61b1dc8adb2645c13798f3c4")
    .then((res)=>{
     console.log(res.data.Parfume);
     setJoy(res.data.Parfume)
    })
},[])
    return (
        
             <div className='Ajoy'>
            <button>Add a new Parfume</button>
            {joy.map((item)=>{
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
