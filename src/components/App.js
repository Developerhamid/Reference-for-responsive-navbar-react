import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./About";
import Bond from "./Bond";
import Contact from "./Contact";
import Home from "./Home";
import Navigate from "./Navigate";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/bond" element={<Bond />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
