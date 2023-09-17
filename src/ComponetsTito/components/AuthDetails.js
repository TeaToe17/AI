import React, { useEffect, useState, createContext } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Routes, Route, useNavigate } from "react-router-dom";

import Navbar from "../../Components/Navbar";
import Home from "../../Components/Home";
import Blog from "../blog";
import Pages from "../Pages";
import Contact from "../../ComponentsVictor/component/Contact";
import MySignin from "./mySignin";
import MySignup from "./mySignup";
import Forgotpassword from "./Forgotpassword"

export const ContextDemo = createContext();

const AuthDetails = () => {
  const [authuser, setAuthUser] = useState(null);
  const navigate = useNavigate();

  let Access = false;

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
  }, []);

  useEffect(() => {}, []);
  {
    authuser && (Access = true);
  }

  console.log(Access);
  return (
    <ContextDemo.Provider value={Access}>
      <div>
        <Navbar />
        <Routes>
          <Route path="/demo" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mysignin" element={<MySignin />} />
          <Route path="/" index element={<MySignup />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
        </Routes>
      </div>
    </ContextDemo.Provider>
  );
};

export default AuthDetails;
