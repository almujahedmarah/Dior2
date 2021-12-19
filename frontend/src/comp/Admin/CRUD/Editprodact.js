import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";



export default function Editprodact() {
  const [miss, setMiss] = useState([]);
  const [name, setName] = useState();
  const [img, setImg] = useState();
  const [price, setPrice] = useState();
  const [dec, setDec] = useState();
  const navigate = useNavigate();

  const { colId, id } = useParams();

  //=====================================================================================

  useEffect(() => {
    axios
      .get(`http://localhost:3001/Admin/Parfume/${colId}/${id}`)
      .then((res) => {
        console.log(res.data.allProduct.Parfume);
        setMiss(res.data.allProduct.Parfume[0]);
      });
  }, []);

  //====================================================================================

  const putData = (e) => {
    e.preventDefault();
    console.log("hi");
    axios
      .patch(`http://localhost:3001/Admin/Parfume/${colId}/${id}`, {
        name: name,
        image: img,
        price: price,
        description: dec,
      })
      .then((res) => {
        console.log(res);
      });
    navigate(`/${colId}`);
    alert("Updated successfully");
  };

  //===============================================================================================

  // const updatePage = () => {
  //   axios
  //     .get(`http://localhost:3001/Admin/collection/${colId}`)
  //     .then((res) => {
  //       console.log(res.data.Parfume);
  //       setMiss(res.data.Parfume);
  //     })
  //     .catch((error) => {
  //       console.log(error.res);
  //     });
  // };

  //========================================================================================

  return (
    <div className="adddddd">
      <form
        className="addpro"
        onSubmit={(e) => {
          putData(e);
        }}
      >
        <label>Name</label>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>Image</label>
        <input
          type="text"
          onChange={(e) => {
            setImg(e.target.value);
          }}
        />
        <label>price</label>
        <input
          type="number"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <label>Description</label>
        <input
          type="text"
          onChange={(e) => {
            setDec(e.target.value);
          }}
        />
        <button className="singup" type="submit">
          Eidet
        </button>
      </form>
    </div>
  );
}
