import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Product from './components/Product'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart'
import Footer from './components/Footer'


function App() {
  const [cart, setCart] = useState([])


  return (
    <div className=' min-h-screen flex flex-col'>
      <Router>
        <Navbar cart={cart} />
        <Routes>
          <Route path='/' element={<Product cart={cart} setCart={setCart} />} />
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
