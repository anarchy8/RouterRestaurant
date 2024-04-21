import { useState } from 'react'
import './styles/index.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Menu from './pages/menu'
import Contact from './pages/contact'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Menu' element={<Menu />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App
