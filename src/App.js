import './App.css';
import Home from './MainPage/Home'
import Assignment from './MainPage/Assignment'
import RetingPage from './MainPage/RetingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TabPage from './MainPage/TabPage'

function App() {
  return(
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/assignment' element={<Assignment/>}/>
          <Route path='/reting' element={<RetingPage/>}/>
          <Route path='/tab' element={<TabPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;