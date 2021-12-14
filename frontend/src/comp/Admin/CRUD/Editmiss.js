import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";

export default function Editmiss() {
const [miss, setMiss] = useState([])
const [name, setName] = useState();
const [img ,setImg] =useState();
const [price, setPrice] =useState();
const [dec, setDec] = useState()
const navigate= useNavigate()

const {id,colId} = useParams()


const putData =(e)=>{
 e.preventDefault();
 axios.patch(` http://localhost:3001/Admin/Parfume/${colId}/${id}`,{
     name:name,
     image:img,
     price:price,
     description:dec
 })
 .then((res)=>{
    console.log(res);
    setMiss(res.data.Parfume);
  
 })
 navigate("/AMissD")
 alert("Updated successfully");
}

    return (
        <div>
            <form onSubmit={(e) => {putData(e)}}>
                <label>Name</label>
                <input type="text" onChange={(e) => {setName(e.target.value)}}/>
                <label>Image</label>
                <input type="text" onChange={(e) => {setImg(e.target.value)}} />
                <label>price</label>
                <input type="number" onChange={(e) => {setPrice(e.target.value) }} />
                <label>Description</label>
                <input type="text" onChange={(e) => {setDec(e.target.value) }} />
                <button type='submit'>Eidet</button>
            </form>
        </div>
    )
}
