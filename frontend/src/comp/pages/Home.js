import React, { useEffect ,useState } from "react";
import axios from "axios";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Footer from "../pages/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Home() {
  const [call, setCall] = useState()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    axios.get("http://localhost:3001/Admin/collection").then((res) => {
      console.log(res.data);
      setCall(res.data);
      setLoading(true)
    });
  }, []);
  return (
    <div>
      <Parallax
        pages={4}
        style={{ top: "15", left: "0", backgroundColor: "#ffefe8" }}
      >
        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: `url("https://www.dior.com/couture/var/dior/storage/images/25778945/17-eng-GB/cdc-femme-gift-for-her6_1440_1200.jpg")`,
            backgroundSize: "cover",
            height: "600px",
          }}
        >
          <h1 className="homett">DIOR</h1>
        </ParallaxLayer>
 
 
  {/* ==================================================================================================================== */}
       
        <ParallaxLayer
          className="ii"
          offset={1}
          speed={0.9}
          style={{ backgroundColor: "#F9D6D4" }}
        />
        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="homep1">
            <img
              className="homep1img"
              src="https://i.ibb.co/Xbpxr4J/Capture-jj-2.png"
            />
            <div className="homep1p">
              <p>
                <b>
                  "J’adore is an extraordinary fragrance, because it succeeds in
                  being effortlessly seductive while boasting an original
                  signature. Carnal, but not overbearing. This is a composition
                  that unites contrasts, transforming iconic floral notes into
                  an appealing, unprecedented and mysterious ensemble. J'adore
                  invents a flower that does not exist." François Demachy,
                  Parfumeur-Créateur Dior"
                </b>
              </p>
              <p>
                By incorporating Grasse tuberose into the J’adore composition, I
                created a romantic encounter. It is as though J’adore “seduced”
                the tuberose, taking it on, showcasing it, colouring it, and
                giving it light. It instantly symbolizes a powerful and
                confident femininity. By incorporating Grasse tuberose into the
                J’adore composition, I created a romantic encounter. It is as
                though J’adore “seduced” the tuberose, taking it on, showcasing
                it, colouring it, and giving it light. It instantly symbolizes a
                powerful and confident femininity.
              </p>
            </div>
          </div>
        </ParallaxLayer>
        {/* ===================================================================================================================================== */}
        <ParallaxLayer
          className="ii"
          offset={2}
          speed={1}
          style={{ backgroundColor: "#ffefe8" }}
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
          <div className="ooooooooooo">
            <h3 className="hp1ee">INTRIGUING GRASSE TUBEROSE</h3>
          <div className="homepvid">
            <p className="hhhhhpppppp">The house of Dior supports the reintroduction of the Tuberose in the Grasse region, where it hadn’t been found since the 1950s. For over a decade, the House has endeavored to develop partnerships all over the world in order to provide Dior fragrances with the finest raw materials. Establishing sustainable relationships with these exceptional industries therefore, it ensures the legacy of a unique, age-old expertise, such as the enfleurage technique.</p>
            <video width="800px" className="videohh" controls>
              <source 
                src="https://secure.massmotionmedia.com/diorparfums/projects/diorparfums_jadore_infinissime_film_tubereuse_2020/videos/20200810083927_960x540_1300_114cf8a3-0861-48e3-8bf1-5ac96f9d8b3c.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="homecard">
            {loading? 
            <> 

            {call.map((item)=>{
              return(
                <div className="homecardhhhh">
                  <h2 className="hp1ee">{item.name}</h2>
               < Link  className="link"  to={`/collection/${item._id}`}>
                <img   className="homecardhimggggg" src={item.img} />
                </Link>
                </div>
              )
            })}
            </>
            : <></>}
            </div>
          </div>
        </ParallaxLayer>
        {/* ============================================================================================================================== */}
        {/* <ParallaxLayer
          className="ii"
          offset={3}
          speed={1}
          style={{ backgroundColor: "#ffefe8" }}
        />
       
        <ParallaxLayer
          offset={3}
          speed={1}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
           <div className="homecard">
          <img width="200px" src="https://www.dior.com/couture/var/dior/storage/images/folder-media/folder-images/folder-jadore-infinissime/folder-troublante-tubereuse/tubereuse-1/20686204-1-fre-FR/tubereuse-1_1440_1200.jpg"/>
          <img  width="200px" src="https://www.dior.com/couture/var/dior/storage/images/folder-media/folder-images/folder-jadore-infinissime/folder-troublante-tubereuse/tubereuse-2/20686214-1-fre-FR/tubereuse-2_1440_1200.jpg"/>
          <img  width="200px" src="https://www.dior.com/couture/var/dior/storage/images/folder-media/folder-images/folder-jadore-infinissime/folder-troublante-tubereuse/tubereuse-3/20686218-1-fre-FR/tubereuse-3_1440_1200.jpg"/>
        </div>
        </ParallaxLayer> */}
        {/* ================================================================================================================================ */}
        <ParallaxLayer
          className="ii"
          offset={3}
          speed={1}
          style={{ backgroundColor: "#AD867B" }}
        />

        <ParallaxLayer
          offset={3}
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
