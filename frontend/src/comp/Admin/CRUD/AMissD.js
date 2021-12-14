import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";



export default function AMissD() {
const [miss, setMiss] = useState([])
const navigate= useNavigate()
// const {id,colId} = useParams()

useEffect(()=>{
    axios.get(`http://localhost:3001/Admin/collection/${colId}`)
    .then((res)=>{
     console.log(res.data.Parfume);
     setMiss(res.data.Parfume)
    })
},[])

const deletitem =(_id)=>{
axios.delete(` http://localhost:3001/Admin/Parfume/${colId}/${_id}`)
.then((res) =>{
console.log(res.data.Parfume);
setMiss(res.data.Parfume)
})
}

const addpag =()=>{
    navigate("/Addmiss")
}
const editpag =(id)=>{
    navigate(`/Editmiss/${id}`)
}

    return (
        <div >
               <button onClick={()=>addpag()}>Add a new Parfume</button>
            {miss.map((item)=>{
                return(
                    <div>
                    <img src={item.image}/>
                    <h4>Id:{item._id}</h4>
                    <h3>{item.name}</h3>
                    <h4>RS{item.price}</h4>
                    <button onClick={()=> deletitem(item._id)}>Delet</button>
                        <button onClick={()=>editpag(item._id)}>Eidt</button>
                    </div>
                )
            })}
        </div>
    )
}
