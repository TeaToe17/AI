import React, { useContext } from "react";
import Button from "./Button";
import video from "./img/video-circle.png";
import footerPic from "./img/logos.png";
import "./styles.scss";

import { ContextDemo } from "../ComponetsTito/components/AuthDetails";

const Home = () => {
  const Access = useContext(ContextDemo);
  return (
    <div>
      <div className="boxleft"></div>
      <div className="home">
        {Access && (
          <div className="homePageContents">
            <div className="div_c">
              <div className="contentBox">
                <div className="top-content">
                  <div className="intro">
                    <div className="main">
                      <p>
                        Write better <br /> content for your
                      </p>
                      <p className="ads">facebook ads</p>
                    </div>
                  </div>
                  <p className="loremE">
                    Lorem ipsum dolor sit amet consectetur <br /> adipisicing
                    elit. Labore voluptates tempora id,
                    <br /> error provident hic? Veniam
                  </p>
                </div>
                <div className="free-trials">
                  <Button
                    style={{
                      background:
                        "linear-gradient(90deg, #2b59ff 0%, #bb2bff 100%)",
                      color: "#E0E0E0",
                      border: "1px solid white",
                      width: "179px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "10px",
                      gap: "10px",
                      padding: "10px",
                      height: "34px",
                      boxSizing: "border-box",
                      cursor: "pointer",
                      transition: "0.3s",
                    }}
                    text="
                    Start 14 days free trial"
                  />
                  <span>
                    <img src={video} alt="" /> <span>watch a demo</span>
                  </span>
                </div>
              </div>
            </div>
            <img className="footerPic" src={footerPic}></img>
          </div>
        )}
      </div>
      <div className="boxright"></div>
    </div>
  );
};

export default Home;
