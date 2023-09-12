import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { auth } from "../firebase";

import { ContextDemo } from "./AuthDetails";

const MySignin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displaySignin, setDisplaySignin] = useState(true);
  const [myerror, setMyError] = useState(false);
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
        setMyError(true);
      });
  };

  const Access = useContext(ContextDemo);
  console.log(myerror);
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
            {myerror && (
              <div style={{ color: "red" }}>
                User not found OR Connection Error
              </div>
            )}
            <div style={{ color: "white" }}>
              Dont have an Account? <NavLink to="/mysignup">Sign Up</NavLink>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default MySignin;
