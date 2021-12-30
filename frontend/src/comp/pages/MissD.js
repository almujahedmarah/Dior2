import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Link } from "react-router-dom";

export default function MissD() {
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

  //==============================================================================================================================
  const [miss, setMiss] = useState([]);
  const [col, setCol] = useState([]);
  const { colId } = useParams();
  const [cart, setCart] = useState("");

  useEffect(() => {
    axios.get(`/Dior/collection/${colId}`).then((res) => {
      console.log(res.data.Parfume);
      setCol(res.data);
      setMiss(res.data.Parfume);
    });
  }, [colId]);
  // console.log(jador)
  const alignCenter = { display: "flex", alignItems: "center" };
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
        setCart(res.data);
      });

    Toast.fire({
      icon: "success",
      title: "Added to Crat Successfully",
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
          <div className="missdtitl">
            <h1>{col.name}</h1>
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
          <div className="vfrvfr">
            <div className="apovthevid">
              <h5>Parfum</h5>
              <p>
                An iconic fragrance, J’adore Eau de Parfum is the grand feminine
                floral by the House of Dior. Finely crafted down to the last
                detail, like a custom-made flower, J'adore is a bouquet of the
                most beautiful flowers from around the world. Essence of
                Ylang-Ylang with its floral and fruity notes and essence of
                Damascus Rose from Turkey blend with a rare duo of Jasmine
                Grandiflorum from Grasse and Indian Jasmine Sambac, with fruity
                and voluptuous sensuality. An iconic fragrance, J’adore Eau de
                Parfum is the grand feminine floral by the House of Dior. Finely
                crafted down to the last detail, like a custom-made flower,
                J'adore is a bouquet of the most beautiful flowers from around
                the world. Essence of Ylang-Ylang with its floral and fruity
                notes and essence of Damascus Rose from Turkey blend with a rare
                duo of Jasmine Grandiflorum from Grasse and Indian Jasmine
                Sambac, with fruity and voluptuous sensuality.
              </p>
            </div>
            <div>
              {console.log(col.vidourl)}
              <video
                src={col.vidourl}
                type="video/mp4"
                width="auto"
                height="auto"
                controls
              ></video>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 2.3, end: 15 }}
          style={{
            ...alignCenter,
            justifyContent: "flex-start",
            width: "400px",
          }}
        >
          <div>
            <img className="missdimg" src={col.stickyimg} />
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
                  <Link to={`/Details/${colId}/${item._id}`}>
                    <img className="jadimg" src={item.image} />
                  </Link>
                  <div className="jad">
                    <h4 className="jname">{item.name}</h4>
                    <p className="jpric">RS {item.price}</p>
                    <button
                      className="jbutton"
                      onClick={() => createAdd(item)}
                      type="submit"
                    >
                      Add to Cart
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
