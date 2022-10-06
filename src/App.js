import './App.css';
import Home from './MainPage/Home'
import Assignment from './MainPage/Assignment'
import Reting from './MainPage/RetingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return(
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/assignment' element={<Assignment/>}/>
          <Route path='/reting' element={<Reting/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;