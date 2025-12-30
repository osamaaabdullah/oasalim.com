import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  return (
    <div className='md:w-9/10 lg:w-8/10 min-[1100px]:ww-[70%] mx-auto'>
      <BrowserRouter>
        <Analytics/>
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