import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Buttons from './Components/Buttons';
import Rating from './Pages/Rating';
import Toggle from './Pages/Toggle';
import Tab from './Pages/Tab';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Buttons />} />
      <Route path="/toggle" element={<Toggle />} />
      <Route path="/rating" element={<Rating />} />
      <Route path="/tab" element={<Tab />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
