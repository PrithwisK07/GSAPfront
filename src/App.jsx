import React from 'react'
import { SplitText, ScrollTrigger, gsap } from 'gsap/all'
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import Cocktails from './components/Cocktails';
import About from './components/About';
import Art from "./components/Art";
import Slider from './components/Slider';
import Contact from './components/Contact';

gsap.registerPlugin(SplitText, ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Hero></Hero>
      <Cocktails></Cocktails>
      <About></About>
      <Art></Art>
      <Slider></Slider>
      <Contact></Contact>
    </main>
  )
}

export default App