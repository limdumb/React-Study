import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Buttons from './Components/Buttons';
import Toggle from './Pages/Toggle';


function App() {
  return (
    <BrowserRouter>
    <div>
    <Routes>
      <Route path="/" element={<Buttons />} />
      <Route path="/toggle" element={<Toggle />} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
