import Footer from "@/atoms/Footer";
import Header from "@/atoms/Header";
import About from "@/pages/About";
import Home from "@/pages/Home";
import { Route, Routes } from "react-router-dom";

const SarthiAyurvedicApp = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default SarthiAyurvedicApp;
