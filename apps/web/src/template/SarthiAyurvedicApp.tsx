import Footer from "@/atoms/Footer";
import Header from "@/atoms/Header";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Doctors from "@/pages/Doctors";
import Home from "@/pages/Home";
import { Route, Routes } from "react-router-dom";

const SarthiAyurvedicApp = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default SarthiAyurvedicApp;
