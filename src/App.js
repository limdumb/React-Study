import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Buttons from './Components/Buttons';
import Toggle from './Pages/Toggle';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Buttons />} />
      <Route path="/toggle" element={<Toggle />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
