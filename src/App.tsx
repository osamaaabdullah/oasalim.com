import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div className='md:w-9/10 lg:w-7/10 mx-auto'>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path ="/about" element={<About />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App