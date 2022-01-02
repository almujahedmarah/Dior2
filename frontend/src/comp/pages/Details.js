import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Footer from "../pages/Footer";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
// import { Link } from "react-router-dom";

export default function Details() {
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

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [pro, setPro] = useState([]);
  const { id } = useParams();
  const { colId } = useParams();
  const [miss, setMiss] = useState([]);

  useEffect(() => {
    axios.get(`/Dior/Parfume/${colId}/${id}`).then((res) => {
      console.log(res.data);
      setPro(res.data.Parfume);
    });
  }, {});

  //=========================================================================================================
  const uid = localStorage.getItem("id");

  const createAdd = (item) => {
    console.log(item);
    axios
      .post(`/user/cart/${uid}/${colId}/${item._id}`, {
        quantity: 1,
      })
      .then((res) => {
        console.log(res.data);
      });

    Toast.fire({
      icon: "success",
      title: "Added to Crat Successfully",
    });
  };
  //============================================================================================================

  useEffect(() => {
    axios.get(`/Admin/collection/${colId}`).then((res) => {
      console.log(res.data.Parfume);
      setMiss(res.data.Parfume);
      //  setLoading(true)
    });
  }, []);

  

  //============================================================================================================
  let arr = [];
  return (
    <div>
      <Parallax
        pages={2.2}
        style={{ top: "15", left: "0", backgroundColor: "#F9D6D4" }}
      >
        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F9D6D4",
          }}
        >
          <div className="proDetailscard">
            {pro.map((item) => (
              <div className="proDetails">
                <div className="proDetailstext">
                  <h1 className="proDetailsh1">{item.name}</h1>
                  <h5 className="proDetailsprice">RS {item.price} 100 ml</h5>
                  <h5 className="proDetailsdes">{item.description}</h5>
                  <button
                    className="jbutton"
                    onClick={() => {
                      createAdd(item);
                    }}
                  >
                    Add to Cart 
                  </button>
                </div>
                <div className="proDetailsimg">
                  <img src={item.image} />
                </div>
              </div>
            ))}
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.7}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // top: "0.02"
          }}
        >
          <div className="detelbottomcards">
            {miss.map((item,i) => {
              arr.push(item);
              console.log(arr);
              if (arr.length < 5) {
                return (
                  <div key={i}>
                    {/* <Link to={`/Details/${colId}/${item._id}`}> */}
                     <img
                      width="200px"
                      src={item.image}
                      onClick={() => {setPro([item])}}
                    /> 
                    {/* </Link> */}
                    <h6>{item.name}</h6>
                    <h6>{item.price}</h6>
                    <button
                      className="jbutton"
                      type="submit"
                      onClick={() => {createAdd(item)}}
                    >
                      Add to Cart
                    </button>
                  </div>
                );
              }
            })}
          </div> 
          {/* <h1>hi</h1> */}
        </ParallaxLayer>

        <ParallaxLayer
          className="ii"
          offset={1.6}
          speed={2}
          style={{ backgroundColor: "#AD867B" }}
        />

        <ParallaxLayer
          offset={1.3}
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
