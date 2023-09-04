import React from "react";
// import Pages from "./Pages"

import result from "./images/results.png";
import result2 from "./images/result 2.png";

import Button2 from "./button";

const Blog = () => {
  return (
    <div className="blogdiv">
      <div className="blogbacklight"></div>
      <div className="blogbacklight2"></div>
      <div className="blogcontents">
        <div className="blgcntsimg">
          <img src={result}></img>
        </div>
        <div className="blogtext">
          <h2>
            Create Contents efficiently and quick with great AI writing tools
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et illum
            alias fuga ipsa quibusdam, corporis sunt enim tenetur ratione hic
            assumenda suscipit, eum, consequatur quia totam molestias incidunt
            facilis itaque fugiat fugit qui? Eligendi perspiciatis, maxime
            beatae accusantium quisquam quibusdam.
          </p>
          <Button2
            text="Start 14 days free trial"
            style={{
              background: "linear-gradient(90deg, #2B59FF 0%, #BB2BFF 100%)",
              display: "flex",
              width: "169px",
              height: "47px",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              border: "1px solid #676767",
            }}
          />
        </div>
      </div>
      <div className="blogcontents2">
        <div className="blogtext2">
          <h2>
            Write what you want to convey through clear,& authentic writing
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et illum
            alias fuga ipsa quibusdam, corporis sunt enim tenetur ratione hic
            assumenda suscipit, eum, consequatur quia totam molestias incidunt
            facilis itaque fugiat fugit qui? Eligendi perspiciatis, maxime
            beatae accusantium quisquam quibusdam.
          </p>
          <Button2
            text="Start 14 days free trial"
            style={{
              background: "linear-gradient(90deg, #2B59FF 0%, #BB2BFF 100%",
              display: "flex",
              width: "169px",
              height: "47px",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              border: "1px solid #676767",
            }}
          />
        </div>
        <div>
          <img src={result2}></img>
        </div>
      </div>
      {/* <Pages/> */}
    </div>
  );
};
export default Blog;
