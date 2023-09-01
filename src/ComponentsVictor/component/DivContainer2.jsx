import React from "react";
import Plan from "./Plan";

const DivContainer2 = () => {
  return (
    <div className="div_9">
      <div className="div_container2">
        <div className="word">
          <p className="big_5">Make the wise decision for your business</p>
          <p className="p_0">Choose from our affordable 3 package</p>
        </div>
        <div className="plan_2">
          <Plan
            kw="Premium plan"
            money="$29"
            gig="20"
            className="noncolor"
            sup="1 year support"
            started="Get Started"
          />
          <Plan
            money="$79"
            kw="Basic plan"
            gig="15"
            className="noncolor"
            domain="Free customer domain"
            sup="5 year support"
            stat="Basic statistics"
            started="Get started"
          />
          <Plan
            kw="Premium plan"
            money="$129"
            gig="20"
            className="noncolor"
            stat="Full statistics"
            domain="Free customer domain"
            sup="Unlimited support"
            started="Get started"
          />
        </div>
      </div>
    </div>
  );
};

export default DivContainer2;
