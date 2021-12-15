import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function AMissD() {
  const [miss, setMiss] = useState([]);
  const navigate = useNavigate();
  const { colId } = useParams();
  //  const [loading, setLoading] = useState(false)

  useEffect(() => {
    axios.get(`http://localhost:3001/Admin/collection/${colId}`).then((res) => {
      console.log(res.data.Parfume);
      setMiss(res.data.Parfume);
      //  setLoading(true)
    });
  }, []);

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

  const deletitem = (_id) => {
    axios
      .delete(`http://localhost:3001/Admin/Parfume/${colId}/${_id}`)
      .then(async (res) => {
        console.log(res.data.Parfume);
    
        updatePage();
      });
  };

  const addpag = () => {
    navigate(`/Addmiss/${colId}`);
  };
  const editpag = (id) => {
    navigate(`/Editmiss/${colId}/${id}`);
  };

  return (
    <div>
      <button onClick={() => addpag()}>Add a new Parfume</button>
      {miss.map((item) => {
        return (
          <div>
            <img src={item.image} />
            <h4>Id:{item._id}</h4>
            <h3>{item.name}</h3>
            <h4>RS{item.price}</h4>
            <button onClick={() => deletitem(item._id)}>Delet</button>
            <button onClick={() => editpag(item._id)}>Eidt</button>
          </div>
        );
      })}
    </div>
  );
}

{
  /* {loading ?
               <> 
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
                    </>
               : <h1>loading ....</h1>} */
}
