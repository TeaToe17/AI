import  {useState} from "react";
import { useNavigate } from "react-router-dom";
import logo from "./img/logo.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../fireebaseConfig";
const Signin = () => {
  const [err, setErr] =  useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    if(!auth.user){
      navigate("signup")
    }

    try {
      const res = signInWithEmailAndPassword(auth, email, password);
      navigate("/home")
      console.log(res)
    }catch(err){
      setErr(true)
    }
  };
  return (
    <div>
      <div className="signUp">
        {err && <span>Please check your  detils</span>}
        <div className="signUpPageContent">
          <form onSubmit={handleSubmit}>
            <i
              class="fi fi-br-arrow-left back"
              onClick={() => navigate(-1)}
            ></i>
            <div className="logo">
              <img src={logo} alt="" />
              <span>AI</span>
            </div>
            <p>Register</p>
            <div className="inputs">
              <input type="email" placeholder="email" required />
              <input type="password" placeholder="Password" required />
              <button>Sign In</button>
            </div>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "18px",
              }}
            >
              Don't have an Account?{" "}
              <p
                onClick={() => navigate("/signup")}
                style={{ color: "red", textDecoration: "underline" }}
              >
                Sign Up
              </p>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
