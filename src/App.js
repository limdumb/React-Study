import "./App.css";
import Home from "./MainPage/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Switch from "./MainPage/switch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/switch" element={<Switch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
