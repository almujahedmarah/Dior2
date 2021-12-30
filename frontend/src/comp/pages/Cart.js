import React, { useEffect, useState } from "react";
import axios from "axios";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Footer from "../pages/Footer";
import {useNavigate} from 'react-router-dom'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import StripeCheckout from 'react-stripe-checkout'


export default function Cart() {
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


  const [create, setCreate] = useState();
  const [loding, setLoding] = useState(false);
  //  const [cart , setCart] = useState(true)
  const id = localStorage.getItem("id");
  const navigate = useNavigate();


  useEffect(() => {
    if(id != undefined){
    axios.get(`/user/cart/${id}`).then((res) => {
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
      .get(`/user/cart/${id}`)
      .then((res) => {
        console.log(res.data);
        setCreate(res.data);
      })
      .catch((error) => {
        console.log(error.res);
      });
  };

  const deletcart= (_id) =>{
    axios.delete(`/user/delet/${id}/${_id}`)
    .then(async (res) => {
      console.log(res.data);

      updatePage();
    })
  }
  const Checkout=(token)=>{
    axios.post("/orders",{ userId:id, cart:create})
    .then(async(res)=>{
      try {
        const res = await axios.post("/payment", {
          tokenId: token.id,
          amount: create.cart.total * 3.75 * 100,
        });
      } catch (error) {}

      console.log(res);

      Toast.fire({
        icon:"success",
        title: "Added to Order Successfully",
    });
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
            backgroundImage: `url("https://i.ibb.co/Z6N2Mw5/Untitled-cart.png")`,
            backgroundSize: "cover",
            // height: "600px",
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
          <div className="cartgrid">
            <h4>delet</h4>
            <h4 className="cartproducttitle">product</h4>
            <h4>price</h4>
            <h4>quantity</h4>
          </div>
          {id === undefined || create === undefined  ? <h3 className="thetotale">Cart is empty</h3> :
               <div>
                 {loding? 
                 <>
                    {create.products.map((item,i) =>{
                return(
                  <div  className="gggg">
                    <HighlightOffIcon  onClick={() => deletcart(item._id)}/>
                    <img className="cartimg" src={item.image} />
                    <h4>{item.name}</h4>
                    <p>RS{item.price}</p>
                    <p>{create.cart.product[i].quantity}</p>
                  </div>
                )
              })}
                <div className="thetotale">
              <h4>total: {create.cart.total}</h4>
              {/* onClick={()=>Checkout()} */}
              <StripeCheckout
              stripeKey="pk_test_51KBGTFJzJ01wRyOileByHNloLZlNXMGNZsBa3ayaYQARGYPdYD28XR6LowErqlbd1KuWqvib7R6uwjKRmnrBPLD000ctglULAA"
              token={Checkout}
              billingAddress
              shippingAddress
              amount={Math.floor((create.cart.total * 1.15) / 3.75) * 100}
              >
              <button className="jbutton" >Checkout</button>
              </StripeCheckout>
              </div>  
                 </>
                 :
                 <>
                 <h1 className="thetotale">Loading...</h1></>
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
