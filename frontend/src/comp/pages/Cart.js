import React, { useEffect, useState } from "react";
import axios from "axios";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Footer from "../pages/Footer";

export default function Cart() {
  const [create, setCreate] = useState([]);
  //  const [cart , setCart] = useState(true)
  const id = localStorage.getItem("id");

  useEffect(() => {
    axios.get(`http://localhost:3001/user/cart/${id}`).then((res) => {
      console.log('res ===>',res);
      setCreate(res.data);
      console.log("cart  total ===>", create);
      //  setCart(false)

    });
  }, []);



  const updatePage = () => {
    axios
      .get(`http://localhost:3001/user/cart/${id}`)
      .then((res) => {
        console.log(res.data);
        setCreate(res.data);
      })
      .catch((error) => {
        console.log(error.res);
      });
  };

  const deletcart= (_id) =>{
    axios.delete(`http://localhost:3001/user/delet/${id}/${_id}`)
    .then(async (res) => {
      console.log(res.data);

      updatePage();
    })
  }

  return (
    <div>
      <Parallax
        pages={3}
        style={{ top: "15", left: "0", backgroundColor: "#ffefe8" }}
      >
        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ffefe8",
          }}
        >
          <h1 className="CART">DIOR</h1>
        </ParallaxLayer>
        {/* ============================ map part ===================================================================== */}
        <ParallaxLayer
          className="ii"
          offset={1}
          speed={0.1}
          style={{ backgroundColor: "#F9D6D4" }}
        />
        <ParallaxLayer
          offset={1}
          speed={0.5}
          // style={{
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          // }}
        >
               <div>
              {create.map((item) =>{
                return(
                  <div  className="gggg">
                    <button  className="Cbutton" onClick={() => deletcart(item._id)} >x</button>
                    <img className="cartimg" src={item.image} />
                    <h4>{item.name}</h4>
                    <p>RS{item.price}</p>
                  </div>
                )
              })}
            </div> 
            {/* <div>
              <h4>{create.total}</h4>
              </div>            */}
        </ParallaxLayer>
        {/* //==================== FOOTER PART========================================================== */}
        <ParallaxLayer
          className="ii"
          offset={2}
          speed={0.1}
          style={{ backgroundColor: "#E6B5B8" }}
        />
       
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
