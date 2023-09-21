import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { auth } from "../firebase";

import { ContextDemo } from "./AuthDetails";
import "../blog-pages.css";

const MySignin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [myerror, setMyError] = useState("");
  const navigate = useNavigate();

  const handleSIgnin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/demo");
      })
      .catch((error) => {
        console.log(error);
        setMyError(error.code);
      });
  };

  //   useEffect(() => {
  //     window.addEventListener("load", () => {
  //       const loader = document.querySelector(".loader");
  //       loader.classList.add("loader-hidden");
  //       loader.addEventListener("transitionend", () => {
  //         loader.remove();
  //       });
  //     });
  //   }, []);

  console.log(myerror);

  const Access = useContext(ContextDemo);
  return (
    <>
      {!Access && (
        <div className="signincontainer">
          <form onSubmit={handleSIgnin}>
            <h1 style={{ color: "white" }}>Sign In</h1>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign in</button>
            {myerror && <div style={{ color: "red" }}>{myerror}</div>}
            <div style={{ color: "white" }}>
              Dont have an Account? <NavLink to="/mysignup">Sign Up</NavLink>
            </div>
            <p>
              <NavLink to="/forgotpassword">Forgot Password</NavLink>
            </p>
          </form>
        </div>
      )}
    </>
  );
};

export default MySignin;
