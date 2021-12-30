import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function Addmiss() {

  const MySwal = withReactContent(Swal);
  const Toast = MySwal.mixin({
    toast: true,
    position: "top-start",
    showConfirmButton: false,
    timer: 1300,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", MySwal.stopTimer);
      toast.addEventListener("mouseleave", MySwal.resumeTimer);
    },
  });

  //======================================================================
  const [addmiss, setAddmiss] = useState([]);
  const navigate = useNavigate();
  const { colId } = useParams();

  const AddDior = (e) => {
    e.preventDefault();

    let name = e.target[0].value;
    let img = e.target[1].value;
    let price = e.target[2].value;
    let dec = e.target[3].value;
    console.log(e);

    axios
      .post(`http://localhost:3001/Admin/Parfume/${colId}`, {
        name: name,
        image: img,
        price: price,
        description: dec,
      })
      .then((res) => {
        console.log(res);
        setAddmiss([...addmiss, res.data.Parfume]);
      });

    navigate(`/${colId}`);

    // alert("Add Sucsesfull");
    Toast.fire({
      icon: "success",
      title: "Added  Prodact  Successfully",
    });
  };

  return (
    <div className="adddddd">
      <form
      className="addpro"
        onSubmit={(e) => {
          AddDior(e);
        }}
      >
        <label>Name</label>
        <input type="text" />
        <label>Image</label>
        <input type="text" />
        <label>Price</label>
        <input type="number" />
        <label>Description</label>
        <input type="text" />
        <button className="singup" type="submit">Added</button>
      </form>
    </div>
  );
}
