import { createContext, useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Product from './components/Product'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart'
import Footer from './components/Footer'

export const ShopContext = createContext({
  cart: [],
  setCart: [],
  data: [],
  loading: true,
  setloading: false,
  handleAddToCart: () => { },
  addedProducts: []
})


function App() {
  const [cart, setCart] = useState([])

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products?limit=20")
        if (!response.ok) {
          throw new Error(`This is an HTTP error: The status is ${response.status}`)
        }
        const actualData = await response.json()
        setData(actualData)
      } catch (err) {
        console.log(err);
        setData(null)
      } finally {
        setLoading(null)
      }

    }
    getData()
  }, [])

  const addToCart = (id, title, price, image, category) => {
    const existingProductIndex = cart.findIndex(item => item.id === id);

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      const obj = {
        id,
        title,
        price,
        image,
        category,
        quantity: 1
      };
      setCart([...cart, obj]);
    }
    console.log("Cart element = ", cart);
  }

  const [addedProducts, setAddedProducts] = useState([]);

  const handleAddToCart = (id, title, price, image, category) => {
    addToCart(id, title, price, image, category);
    setAddedProducts([...addedProducts, id]);
    setTimeout(() => {
      setAddedProducts(addedProducts.filter(productId => productId !== id));
    }, 2000);
  };


  return (
    <div className=' min-h-screen flex flex-col'>
      <ShopContext.Provider value={{ cart, setCart, data, loading, setLoading, handleAddToCart, addedProducts }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      </ShopContext.Provider>
    </div>
  )
}

export default App
