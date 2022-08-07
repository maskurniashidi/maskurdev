import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Inhotel from "./pages/Project/Inhotel/Inhotel";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inhotel" element={<Inhotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
