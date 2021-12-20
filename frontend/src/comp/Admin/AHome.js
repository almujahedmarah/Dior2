import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Footer from "../pages/Footer";
import React, { useEffect, useState } from "react";



export default function AHome() {

  const navigate1 = useNavigate();
  const [Coll, setColl] = useState([]);

//==================================================================================================


  useEffect(() => {
    axios.get("http://localhost:3001/Admin/collection").then((res) => {
      console.log(res.data);
      setColl(res.data);
    });
  }, []);

//===============================================================================================================

  const jadorpage = (id) => {
    navigate1(`/${id}`);
  };

//=============================================================================================================
  return (
    <div>
      <Parallax
        pages={3}
        style={{
          top: "15",
          left: "0",
          backgroundColor: "#F9D6D4",
        }}
      >
        <ParallaxLayer
          offset={0}
          speed={1}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage:`url("https://i.ibb.co/gJ2xjVR/Untitleddfzdg.png")`,
            backgroundSize:"cover"
          }}
        >
          <h1 className="adminhi">Admin</h1>
        </ParallaxLayer>

        <ParallaxLayer
          className="ii"
          offset={1}
          speed={0.1}
          style={{ backgroundColor: "#F9D6D4" }}
        />
{/* ============================================================================================== */}
        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="adminp1">
            {/* <div className="undertheheder">
              <img src=""/>
              <img src=""/>
              <img src=""/>
            </div> */}
            <p className="adph">The new Miss Dior bow dresses up with ABCDior charms, adjusted onto a delicately worked brooch, ended with the iconic Dior star.
           A true couture statement, to personalize your Miss Dior fragrance 100ml in an infinite number of possibilities. A few centimeters of absolute luxury tied around the neck of the new Miss Dior bottle. A Haute Couture bow, imagined like a myriad of multicolored floral touches, by one of France's finest ribbonmakers.</p>
          <div className="adminhome">
            {Coll.map((col) => {
              return (
                <div className="#">
                  <h2 className="Aht">{col.name}</h2>

                  <img
                    className="Ah"
                    onClick={() => jadorpage(col._id)}
                    src={col.img}
                  />
                </div>
              );
            })}
          </div>
          <p  className="adp">A few centimeters of absolute luxury tied around the neck of the new Miss Dior bottle. A Haute Couture bow, imagined like a myriad of multicolored floral touches, by one of France's finest ribbonmakers.</p>
          <div>
            <img src="https://i.ibb.co/Svjd31s/Untitledvvvv.png"/>
          </div>
          </div>
        
        </ParallaxLayer>
{/* //======================================================================================================= */}
        <ParallaxLayer
          className="ii"
          offset={2}
          speed={1.0}
          style={{ backgroundColor: "#AD867B" }}
        />

{/* //============================================================================================================ */}
        <ParallaxLayer
          offset={2}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
