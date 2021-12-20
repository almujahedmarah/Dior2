
import React, {useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Footer from '../pages/Footer'

export default function Order() {
  const [create, setCreate] = useState();
  const [loding, setLoding] = useState(false);

  const id = localStorage.getItem("id");
  useEffect( ()=>{
    axios.post("http://localhost:3001/orders/get", {userId:id})
    .then((res)=>{
      console.log(res.data);
      setCreate(res.data)
    })
  },[])

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
            backgroundImage: `url("https://i.ibb.co/Z6N2Mw5/Untitled-cart.png")`,
            backgroundSize: "cover",
            // height: "600px",
          }}
        >
          <div className="CART">
          <h1 >DIOR</h1>
          <p >your Order</p>
          </div>
        </ParallaxLayer>
        {/* ============================ map part ===================================================================== */}
        <ParallaxLayer
          className="ii"
          offset={1}
          speed={0.1}
          style={{ backgroundColor: "#FAE5E2" }}
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
          {id === undefined || create === undefined  ? <h3 className="thetotale">there is no Order</h3> :
               <div>
                 {loding? 
                 <>
                    {create.carts.products.map((item,i) =>{
                return(
                  <div  className="gggg">
                    <img className="cartimg" src={item.image} />
                    <h4>{item.name}</h4>
                    <p>RS{item.price}</p>
                    <p>{create.product[i].quantity}</p>
                  </div>
                )
              })}
                <div className="thetotale">
              {/* <h4>total: {create.total}</h4> */}
              </div>  
                 </>
                 :
                 <>
                 <h1  className="thetotale">Loading...</h1></>
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
    )
}
