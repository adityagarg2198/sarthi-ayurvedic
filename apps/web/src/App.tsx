import SarthiAyurvedicApp from "@/template/SarthiAyurvedicApp";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const API_BASE = import.meta.env.VITE_API_BASE || "";
    console.log("base api", API_BASE);
    (async () => {
      const res = await fetch(`${API_BASE}/getDoctors`);
      const output = await res.json();
      console.log(output);
    })();
  }, []);
  return <SarthiAyurvedicApp />;
};

export default App;
