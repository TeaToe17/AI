import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { ContextDemo } from "../ComponetsTito/components/AuthDetails";

import Button from "./Button";
import logo from "./img/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuTogle, setMenuToggle] = useState(false);

  const toggleMenu = () => {
    setMenuToggle(!menuTogle);
  };

  const [err, setErr] = useState(false);
  const handleLogout = async () => {
    const auth = auth();
    try {
      await auth.signOut();
    } catch (err) {
      setErr(true);
    }
  };
  const auth = getAuth();

  const HandleSignout = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out succesful");
        navigate("/mysignin");
      })
      .catch((error) => {
        console.log("Try again");
      });
  };

  console.log(auth);
  const Access = useContext(ContextDemo);
  console.log(Access);
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
              {Access && (
                <div className="navlinks">
                  <NavLink to="/demo">Demo</NavLink>
                  <NavLink to="/blog">Blog</NavLink>
                  <NavLink to="/pages">Pages</NavLink>
                  <NavLink to="/contact">Contact</NavLink>
                </div>
              )}
              {menuTogle && (
                <div className="menuToggle">
                  {Access && (
                    <div>
                      {" "}
                      <NavLink to="/demo">Demo</NavLink>
                      <NavLink to="/blog">Blog</NavLink>
                      <NavLink to="/pages">Pages</NavLink>
                      <NavLink to="/contact">Contact</NavLink>
                    </div>
                  )}
                  {!Access && (
                    <div>
                      {" "}
                      <NavLink to="/mysignup">Sign Up</NavLink>
                      <NavLink to="/mysignin">Sign In</NavLink>
                    </div>
                  )}
                </div>
              )}
            </div>
            {!Access && (
              <div className="signin-up">
                <Button
                  onClick={() => navigate("mysignin")}
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
                  onClick={() => navigate("mysignup")}
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
            )}

            {Access && (
              <Button
                onClick={() => HandleSignout()}
                text="Sign Out"
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
            )}

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
