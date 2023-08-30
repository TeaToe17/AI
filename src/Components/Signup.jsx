import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {auth} from '../fireebaseConfig'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import logo from "./img/logo.png";
const Signup = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState(false)
const handleSubmit = async (e)=>{
  e.preventDefault();
  const username = e.target[0].value
  const email =e.target[1].value
  const password = e.target[2].value

  
  try{
    const res =  createUserWithEmailAndPassword(auth, email, password);
    navigate("/home ")
    console.log(res)
  }catch(err){
    setErr(true)
  }
}
  return (
    <div>
      <div className="signUp">
        {/* <button onClick={()=>navigate(-1)}>Go back</button> */}
        <div className="signUpPageContent">
          <form onSubmit={handleSubmit}>
            <i
              class="fi fi-br-arrow-left back"
              onClick={() => navigate("/")}
            ></i>
            <div className="logo">
              <img src={logo} alt="" />
              <span>AI</span>
            </div>
            <p>Login</p>
            <div className="inputs">
              <input type="text" required placeholder="Username" />
              <input type="email" placeholder="email" required />
              <input type="password" placeholder="Password" required />
              <button>Sign Up</button>
              {err && <span>Something Went wrong</span>}
            </div>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "18px",
              }}
            >
              Already have an account?{" "}
              <p
                onClick={() => navigate("/signin")}
                style={{ color: "red", textDecoration: "underline" }}
              >
                Login
              </p>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
