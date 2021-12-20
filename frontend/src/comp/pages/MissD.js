import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


export default function MissD() {
  const [miss, setMiss] = useState([]);
  const [col, setCol] = useState([]);
  const { colId } = useParams();
  const [cart, setCart] = useState("");

  
  useEffect(() => {
    axios
      .get(`http://localhost:3001/Dior/collection/${colId}`)
      .then((res) => {
        console.log(res.data.Parfume);
        setCol(res.data)
        setMiss(res.data.Parfume);
      });
  }, [colId]);
  // console.log(jador)
  const alignCenter = { display: "flex", alignItems: "center" };
  //=========================================================================================================
  const uid = localStorage.getItem("id")


  const createAdd = (item) => {
    console.log(item);
    axios
      .post(`http://localhost:3001/user/cart/${uid}/${colId}/${item._id}`, {quantity:1})
      .then((res) => {
        console.log(res.data);
        setCart(res.data);
      });
  };
//============================================================================================================
  return (
    <div>
      <div className="background" />
      <Parallax pages={6.5} top={10}>
        <ParallaxLayer    
           offset={0}
          speed={0.5}
          style={{
            ...alignCenter,
            justifyContent: "center",
            backgroundImage: `url(${col.hederImg})`,
            backgroundSize: "cover",
            height: "600px",
          }}
        >
          <div className="missdtitl" >
          <h1 >{col.name}</h1>
          <p>By Dior</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            ...alignCenter,
            justifyContent: "center",
  
          }}
        >
          
            
     
  {console.log(col.vidourl)}
<video  src={col.vidourl}  type="video/mp4"  width="auto" height="auto" controls  >

</video>

        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 2, end: 15 }}
          style={{ ...alignCenter, justifyContent: "flex-start",width: "400px" }}
        >
          <div>
            <img
              className="missdimg"
              src={col.stickyimg}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className="card">
            {miss.map((item) => {
              return (
                <div className="jadorc">
                  <img className="jadimg" src={item.image} />
                  <div className="jad">
                    <h4 className="jname">{item.name}</h4>
                    <p className="jpric">RS {item.price}</p>
                    <button className="jbutton"  onClick={() => createAdd(item)} type="submit">
                      pay me
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
