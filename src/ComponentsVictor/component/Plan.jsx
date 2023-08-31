import React from "react";

const Plan = ({ started, className, money, domain, gig, dev, sup, kw, startedc, stat }) => {
  return (
    <div className="plan">
      <div className="div_5">
        <div className="k1">
                  <p className="p_19">{ kw }</p>
          <p className="p_12">
            <span className="deep">{money}</span>/Month
          </p>
          <p className="p_12">
            This package is avaliable for teams 1-100 people
          </p>
          <p className="what">What's included:</p>
          <p className="p_12">{gig} GB dedicated hosting free</p>
          <p className="p_12">{dev}</p>
          <p className="p_12">
            Best for develpers,freelancer {sup} year support
          </p>
          <p className="p_12">{domain}</p>
          <p className="p_12">{stat}</p>
        </div>
        <button className={className}>{started}</button>
      </div>
    </div>
  );
};

export default Plan;
