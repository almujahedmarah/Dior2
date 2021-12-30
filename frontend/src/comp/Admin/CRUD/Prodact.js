import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function AMissD() {

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


  const [miss, setMiss] = useState([]);
  const navigate = useNavigate();
  const { colId } = useParams();


 //=============================================================================


  useEffect(() => {
    axios.get(`http://localhost:3001/Admin/collection/${colId}`).then((res) => {
      console.log(res.data.Parfume);
      setMiss(res.data.Parfume);
      //  setLoading(true)
    });
  }, []);


//========================================================================================


  const updatePage = () => {
    axios
      .get(`http://localhost:3001/Admin/collection/${colId}`)
      .then((res) => {
        console.log(res.data.Parfume);
        setMiss(res.data.Parfume);
      })
      .catch((error) => {
        console.log(error.res);
      });
  };


//=====================================================================================================


  const deletitem = (_id) => {
    axios
      .delete(`http://localhost:3001/Admin/Parfume/${colId}/${_id}`)
      .then(async (res) => {
        console.log(res.data.Parfume);

        updatePage();
      });
      
    Toast.fire({
      icon: "success",
      title: "delete the Prodact Successfully",
    });
  };

//=======================================================================================================

  const addpag = () => {
    navigate(`/Addprodact/${colId}`);
  };
  const editpag = (id) => {
    navigate(`/Editprodact/${colId}/${id}`);
  };

//================================================================================================================

  return (
    <div className="adminpppppp">
      <button className="ADDbutton" onClick={() => addpag()}>Add a new Parfume</button>
      <div className="Admincard">
      {miss.map((item) => {
        return (
          
            <div >
           <img className="Aimg" src={item.image} />
            <h5 className="id" >Id:{item._id}</h5>
            <h5 className="Aname">{item.name}</h5>
            <p className="Apric">RS{item.price}</p>
            <button className="jbutton" onClick={() => deletitem(item._id)}>Delet</button>
            <button className="jbutton" onClick={() => editpag(item._id)}>Eidt</button>
          </div>
        );
      })}
      </div>
    </div>
  );
}


//============================================================================================
