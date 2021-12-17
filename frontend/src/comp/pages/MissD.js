import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import axios from "axios";
import { useState, useEffect } from "react";

export default function MissD() {
  const [miss, setMiss] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/Dior/collection/61b1ddbbdb2645c13798f3ce")
      .then((res) => {
        console.log(res.data.Parfume);
        setMiss(res.data.Parfume);
      });
  }, []);
  // console.log(jador)
  const alignCenter = { display: "flex", alignItems: "center" };

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
            backgroundImage: `url("https://i.ibb.co/wwBwsPg/Duft-Quickie-Miss-Dior-Rose-N-Roses.jpg")`,
            backgroundSize: "cover",
            height: "600px",
          }}
        >
          <div className="missdtitl" >
          <h1 >Miss Dior</h1>
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
          
            
            <video width="1200px" height="600px"  controls>
  <source src="https://secure.massmotionmedia.com/diorparfums/projects/diorparfums_miss_dior_itw_francois_demachy_va/videos/20210802115103_960x540_1900_3385964e-aa1d-4313-ad55-424ab35e6a52.mp4" type="video/mp4"/>
</video>
          
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 2, end: 15 }}
          style={{ ...alignCenter, justifyContent: "flex-start" }}
        >
          <div>
            <img
              className="missdimg"
              src="https://i.pinimg.com/474x/e1/3d/0b/e13d0b983fd3ad2938fd357d44c2f901.jpg"
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
                    <button className="jbutton" type="submit">
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
