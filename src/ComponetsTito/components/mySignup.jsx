import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { auth } from "../firebase";
import { NavLink, useNavigate } from "react-router-dom";
import { ContextDemo } from "./AuthDetails";

const MySignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [myerror, setMyError] = useState("");
  const [displaySignup, setDisplaySignup] = useState(true);
  const navigate = useNavigate();

  const handleSIgnup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/demo");
      })
      .catch((error) => {
        console.log(error);
        setMyError(error.code);
      });
  };

  const Access = useContext(ContextDemo);

  return (
    <div className="signupcontainer">
      {!Access && (
        <form onSubmit={handleSIgnup}>
          <h1 style={{ color: "white" }}> Create an Account</h1>
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
          <button type="submit">Sign Up</button>

          <p style={{ color: "white" }}>
            Already have an Account? <NavLink to="/mysignin">Sign In</NavLink>{" "}
          </p>
          <p>
            <NavLink to="/forgotpassword">Forgot Password</NavLink>
          </p>
          {myerror && <div style={{ color: "red" }}> {myerror} </div>}
        </form>
      )}
    </div>
  );
};

export default MySignup;
