import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function Addmiss() {
    const [addmiss, setAddmiss] = useState([])
    const navigate= useNavigate()


    const AddDior =(e)=>{
     e.preventDefault();

     let name = e.target[0].value;
     let img = e.target[1].value;
     let price = e.target[2].value;
     let dec = e.target[3].value;
     console.log(e);

     axios.post("http://localhost:3001/Admin/Parfume/61b1ddbbdb2645c13798f3ce",{name:name ,image:img ,price:price ,description:dec})
     .then((res)=>{
         console.log(res);
        setAddmiss([...addmiss,res.data.Parfume]);
     })

     navigate("/AMissD")
     
    alert("Add Sucsesfull");
     
    }
    
    return (
        <div>
            <form onSubmit={(e) =>{AddDior(e)}}>
                <label>Name</label>
                <input type="text" />
                <label>Image</label>
                <input type="text" />
                <label>Price</label>
                <input type="number" />
                <label>Description</label>
                <input type="text" />
                <button type='submit'>Added</button>
            </form>
        </div>
    )
}
