import React from "react";
import Image from "./Image";
import Ellipse1 from "./image/image1.svg";
import Ellipse2 from "./image/Ellipse 2(4).png";
import Ellipse3 from "./image/Ellipse 3.png";
import Ellipse4 from "./image/Ellipse 4(2).png";
import Ellipse5 from "./image/Ellipse 5 (1).png";
import Ellipse6 from "./image/Ellipse 6.png";
import twit from "./image/Twitter.png";
import DivContainer2 from "./DivContainer2";
import Gradient from "./Gradient";
import Foot from "./Foot";


const Contact = () => {
  return (
    <div className="hi_9">
      <div className="div_container">
        <div className="div_1">
          <p className="p_1">What our customers say</p>
          <p className="p_2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </p>
        </div>
        <div className="flex_1">
          <Image
            image={Ellipse1}
            p="Savannah Nguyen"
            at="@Kristin Waston"
            twit={twit}
          />
          <Image
            image={Ellipse2}
            p="Ralph Edwards"
            at="@Wade Warren"
            twit={twit}
          />
          <Image
            image={Ellipse3}
            p="Devon Lane"
            at="@Wade Warren"
            twit={twit}
          />

          <Image
            image={Ellipse4}
            p="Theresa Webb"
            at="@Bessie Cooper"
            twit={twit}
          />
          <Image
            image={Ellipse5}
            p="Ronald Richards"
            at="@Cameron Williamson"
            twit={twit}
          />
          <Image
            image={Ellipse6}
            p="Annette Black"
            at="@soroushnrz7"
            twit={twit}
          />
        </div>
      </div>
      <div>
        <DivContainer2 />
      </div>
      <div>
        <Gradient />
      </div>
      <div>
        <Foot />
      </div>
    </div>
  );
};

export default Contact;
