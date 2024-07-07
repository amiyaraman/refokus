import React from "react";
import NavBar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";
import Marquees from "./components/Marquees";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";


function App() {
  const scroll = new LocomotiveScroll();
  return (
    <div className='w-full h-full bg-zinc-900 text-white font-[satoshi]  '>
      <NavBar />
      <Work/>
      <Stripes/>
      <Products></Products>
      <Marquees></Marquees>
      <Cards></Cards>
      <Footer/>
    </div>
  );
}

export default App;