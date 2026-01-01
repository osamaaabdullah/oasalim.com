import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import { Analytics } from "@vercel/analytics/react"
import { useEffect, useState } from 'react'

const App = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
  const root = document.documentElement;
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");
    }, [isDark]);
  
  const handleChange = () =>{
    setIsDark(!isDark);
  }

  return (
    <div className='md:w-9/10 lg:w-8/10 min-[1100px]:w-[70%] mx-auto text-center'>
      <BrowserRouter>
        <Analytics/>
        <NavBar isDark={isDark} handleChange={handleChange}/>
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