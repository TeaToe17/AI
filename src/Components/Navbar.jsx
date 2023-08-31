import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "./Button";
import logo from "./img/logo.png";




const Navbar = () => {
  const navigate = useNavigate();
  const [menuTogle, setMenuToggle] = useState(false);
  const toggleMenu = () => {
    setMenuToggle(!menuTogle);
  };
 
  const [err, setErr] = useState(false)
  const handleLogout = async () => {
    const auth = auth();
    try {
      await auth.signOut();
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <>
      <div className="navigationBar">
        <div className="navigationBarContents">
          <nav>
            <div className="logo">
              <div className="imglogo">
                <img src={logo} alt="logo" />
                <h1>AI</h1>
              </div>
              <div className="navlinks">
                <NavLink to="/">Demo</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/pages">Pages</NavLink>
                <NavLink to="/contact">Contact</NavLink>
              </div>
              {menuTogle && (
                <div className="menuToggle">
                  <NavLink to="/">Demo</NavLink>
                  <NavLink to="/about">About</NavLink>
                  <NavLink to="/blog">Blog</NavLink>
                  <NavLink to="/pages">Pages</NavLink>
                  <NavLink to="/contact">Contact</NavLink>
                  <NavLink to="/signup">Sign Up</NavLink>
                  <NavLink to="/signin">Sign In</NavLink>
                </div>
              )}
            </div>
            <div className="signin-up">
              <Button
                onClick={() => navigate("signin")}
                text="Sign in"
                style={{
                  backgroundColor: "transparent",
                  color: "#E0E0E0",
                  border: "1px solid white",
                  width: "85px",
                  padding: "10px",
                  height: "34px",
                  boxSizing: "border-box",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
              />
              <Button
                onClick={() => navigate("signup")}
                text="Sign Up"
                style={{
                  background:
                    "linear-gradient(90deg, #2b59ff 0%, #bb2bff 100%)",
                  color: "#E0E0E0",
                  border: "1px solid white",
                  width: "116px",
                  padding: "10px",
                  height: "34px",
                  boxSizing: "border-box",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
              />
            </div>
            <button onClick={toggleMenu} className="triggerButton">
              {!menuTogle ? (
                <i class="fi fi-br-menu-burger menu"></i>
                
              ) : (
                <i class="fi fi-br-cross menu"></i>
              )}
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
