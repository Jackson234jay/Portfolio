import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="w-full min-w-full bg-fixed bg-cover overflow-x-hidden">
      <Navbar />
      <Banner />
      <About />
      <Services />
      <Contact />
    </div>
  );
}
