import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import PortFolio from "./components/PortFolio";
import Experiance from "./components/Experiance";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import PDFViewer from "./components/PDFViewer";

function App() {
  const path = window.location.pathname;

  if (path === "/reading") {
    return (
    <>
    <Navbar/>
    <PDFViewer />
    <Footer/>
    </>
    );
  }
  return (
    <>
      <div className="bg-black  bg-gradient-to-r from-slate-200 via-slate-200 to-slate-300 bg-opacity-60 min-h-screen ">
        <Navbar />
        <Home />
        <About />
        {/* <PortFolio /> */}
        <Experiance />
        <Contact />
        {/* <PDFViewer/> */}
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;
