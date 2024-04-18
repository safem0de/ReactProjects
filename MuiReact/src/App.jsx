// https://www.youtube.com/watch?v=vgoDeb1LY8c
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MasterAppBar from "./components/MasterAppBar";
import Home from "./pages/Home";
import ScanIn from "./pages/ScanIn";
import ScanOut from "./pages/ScanOut";
import MasterFilter from "./pages/MasterFilter";

function App() {
  return (
    <>
      <BrowserRouter >
      <MasterAppBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="" element={<Home />} />
        <Route path="scanin" element={<ScanIn />} />
        <Route path="scanout" element={<ScanOut />} />
        <Route path="masterfilter" element={<MasterFilter />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
