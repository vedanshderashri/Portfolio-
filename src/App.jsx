import { useState } from "react";
import WaveLoader from "./components/PageLoader";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Work from "./pages/Work";
import Info from "./pages/Info";
import useSmoothScroll from "./hooks/useSmoothScroll";
import Archive from "./pages/Archive";
import usePageScramble from "./hooks/usePageScramble";

export default function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  useSmoothScroll();
  usePageScramble(location.pathname);

  return (
    <>
       {loading && <WaveLoader onComplete={() => setLoading(false)} />}
      {!loading && (
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Work />} />
            <Route path="/info" element={<Info />} />
            <Route path="/Archive" element={<Archive />} />
          </Routes>
        </div>
      )}
    </>
  );
}
