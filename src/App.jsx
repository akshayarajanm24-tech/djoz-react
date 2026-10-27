
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./pages/Home/Hero";
import Events from "./pages/Home/Events";
import HomeAbout from "./pages/Home/About";
import Service from "./pages/Home/Service";
import Track from "./pages/Home/Track";
import Youtube from "./pages/Home/Youtube";
import Countdown from "./pages/Home/Countdown";

import Skills from "./pages/About/Skills";
import AboutContent from "./pages/About/AboutContent";
import AboutServices from "./pages/About/AboutServices";

import Discography from "./pages/Discography/Discography";
import Tour from "./pages/Tours/Tour";
import Videos from "./pages/Videos/Videos";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";

function Home() {
  return (
    <>
      <Hero />
      <Events />
      <HomeAbout />
      <Service />
      <Track />
      <Youtube />
      <Countdown />
    </>
  );
}

function About() {
  return (
    <>
      <Skills />
      <AboutContent />
      <AboutServices />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/discography" element={<Discography />} />
          <Route path="/tours" element={<Tour />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
