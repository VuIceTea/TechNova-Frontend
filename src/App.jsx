import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const [count, setCount] = useState(0)

  return (
    <MainLayout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category' element={<CategoryPage />} />
        <Route path='/laptop-gaming' element={<CategoryPage />} />
        <Route path='/product/:slug' element={<ProductDetail />} />
      </Routes>
    </MainLayout>
  )
}

export default App
