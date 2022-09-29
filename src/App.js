import './App.css';
import Home from './MainPage/Home'
import Assignment from './MainPage/Assignment'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return(
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/assignment' element={<Assignment/>}/>

        </Routes>
    </BrowserRouter>
  )
}

export default App;