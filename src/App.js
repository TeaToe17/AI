import React, { Suspense } from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import "./styles.scss";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import { Loader } from "./Components/Loader";
import Pages from "./ComponetsTito/Pages";
import Blog from "./ComponetsTito/blog";
import Contact from "./ComponentsVictor/component/Contact";
import "./ComponentsVictor/component/Victor.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="demo"
          
          element={
            <React.Suspense fallback={<Loader />}>
              <Home />
            </React.Suspense>
          }
        />

        <Route
          path="pages"
          element={
            <React.Suspense fallback={<Loader />}>
              <Pages />
            </React.Suspense>
          }
        />

        <Route
          path="blog"
          element={
            <React.Suspense fallback={<Loader />}>
              <Blog />
            </React.Suspense>
          }
        />

        <Route
          path="contact"
          element={
            <React.Suspense fallback={<Loader />}>
              <Contact />
            </React.Suspense>
          }
        />

        <Route
          path="/"
          index
          element={
            <React.Suspense fallback={<Loader />}>
              <Signup />
            </React.Suspense>
          }
        />
        <Route path="signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
