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
      <main className="w-full h-full pt-28">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default SarthiAyurvedicApp;
