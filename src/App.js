import "./App.css";
import Home from "./MainPage/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Switch from "./MainPage/switch";
import Rating from "./MainPage/Rating";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/switch" element={<Switch />} />
        <Route path="/rating" element={<Rating />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
