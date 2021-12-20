import React, { useEffect, useState } from "react";
import axios from "axios";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Footer from "../pages/Footer";
import {useNavigate} from 'react-router-dom'

export default function Cart() {
  const [create, setCreate] = useState();
  const [loding, setLoding] = useState(false);
  //  const [cart , setCart] = useState(true)
  const id = localStorage.getItem("id");
  const navigate = useNavigate();


  useEffect(() => {
    if(id != undefined){
    axios.get(`http://localhost:3001/user/cart/${id}`).then((res) => {
      console.log('res ===>',res);
      if(res.data !== "u dont have a cart"){
        setCreate(res.data);
        console.log("cart  total ===>", create);  
      }
    
    setLoding(true)
      // updatePage();

    });
  }
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
  const Checkout=()=>{
    axios.post("http://localhost:3001/orders",{ userId:id, cart:create})
    .then((res)=>{
      console.log(res);

      navigate("/Order")
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
          <div className="CART">
          <h1 >DIOR</h1>
          <p >your Cart</p>
          </div>
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
          {id === undefined || create === undefined  ? <h3>Cart is empty</h3> :
               <div>
                 {loding? 
                 <>
                    {create.products.map((item,i) =>{
                return(
                  <div  className="gggg">
                    <button  className="Cbutton" onClick={() => deletcart(item._id)} >x</button>
                    <img className="cartimg" src={item.image} />
                    <h4>{item.name}</h4>
                    <p>RS{item.price}</p>
                    <p>{create.cart.product[i].quantity}</p>
                  </div>
                )
              })}
                <div>
              <h4>{create.cart.total}</h4>
              <button onClick={()=>Checkout()}>Checkout</button>
              </div>  
                 </>
                 :
                 <>
                 <h1>Loading...</h1></>
                }
           
            </div> 
}    
        </ParallaxLayer>
        {/* //==================== FOOTER PART========================================================== */}
        <ParallaxLayer
          className="ii"
          offset={2}
          speed={0.1}
          style={{ backgroundColor: "#AD867B" }}
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
