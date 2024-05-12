import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fontsource/ibm-plex-sans-thai-looped";

import Login from "./pages/Login";
import PrintTag from "./pages/PrintTag";
import PrintFullTaxReceipt from "./pages/PrintFullTaxReceipt";

const App = () => {

  return (
    <BrowserRouter >
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="printtag" element={<PrintTag />} />
        <Route path="printreceipt" element={<PrintFullTaxReceipt />} />
      </Routes>
    </BrowserRouter>
  ) 
}

export default App
