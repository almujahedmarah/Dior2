import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";

export default function Jadore() {
  const [jador, setJador] = useState([]);
  const [cart, setCart] = useState("");
  const { colId } = useParams();
  const [Coll, setColl] = useState([])
 
 
  //==================================================================================

  useEffect(() => {
    axios
      .get("http://localhost:3001/Dior/collection/61b1df23db2645c13798f3ee")
      .then((res) => {
        console.log(res.data.Parfume);
        setJador(res.data.Parfume);
      });
  }, []);
  console.log(jador);

  const alignCenter = { display: "flex", alignItems: "center" };

  //==================================================================================================
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
  

  //==================================================================================================================

  return (
    <div>
      <div className="background" />
      <Parallax pages={5} top={10}>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{
            ...alignCenter,
            justifyContent: "center",
            backgroundImage: `url("https://i.ibb.co/6XJRRVh/ggggbhsfnxfg.png")`,
            backgroundSize: "cover",
            height: "600px",
          }}
        >
          <div className="jadortitl">
            <h1>J'ADORE</h1>
            <p className="jadop">Life is gold</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            ...alignCenter,
            justifyContent: "center",
            // backgroundImage: `url("#")`,
            // backgroundSize: "cover",
            // height: "600px",
          }}
        >
          <div className="#">
            
            <video width="1000px" height="600px"  controls>
  <source src="https://secure.massmotionmedia.com/diorparfums/projects/diorparfums_film_savoir_faire_jasmin_en/videos/20200219174729_960x540_1300_45f543de-525c-468f-8480-a81b69f0da90.mp4" type="video/mp4"/>
</video>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 2, end: 4 }}
          style={{ ...alignCenter, justifyContent: "flex-start" , width: "400px"}}
        >
          <div>
            <img
              className="jadorimg"
              src="https://i.ibb.co/N30YQMC/IMG-8550.jpg"
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className="card">
            {jador.map((item) => {
              return (
                <div className="jadorc">
                  <img  className="jadimg" src={item.image} />
                  <div className="jad">
                    <h4 className="jname">{item.name}</h4>
                    <p className="jpric">RS {item.price}</p>
                    <button
                      className="jbutton"
                      onClick={() => createAdd(item)}
                    >
                      pay meee
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </ParallaxLayer>


{/* //============================================================================================================ */}
          
 
      </Parallax>
    </div>
  );
}
