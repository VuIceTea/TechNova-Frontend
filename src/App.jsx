import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import Promo from "./pages/Promo";
import Deals from "./pages/Deals";
import Support from "./pages/Support";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails";
import Wishlist from "./pages/Wishlist";
import AddressBook from "./pages/AddressBook";
import Notifications from "./pages/Notifications";
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <ScrollToTop />
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='/*' element={
              <MainLayout>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/category' element={<CategoryPage />} />
                  <Route path='/laptop-gaming' element={<CategoryPage />} />
                  <Route path='/product/:slug' element={<ProductDetail />} />
                  <Route path='/cart' element={<Cart />} />
                  <Route path='/checkout' element={<Checkout />} />
                  <Route path='/profile' element={<Profile />} />
                  <Route path='/orders' element={<Orders />} />
                  <Route path='/orders/:orderId' element={<OrderDetails />} />
                  <Route path='/wishlist' element={<Wishlist />} />
                  <Route path='/addresses' element={<AddressBook />} />
                  <Route path='/notifications' element={<Notifications />} />
                  <Route path='/promotions' element={<Promo />} />
                  <Route path='/deals' element={<Deals />} />
                  <Route path='/support' element={<Support />} />
                  <Route path='/news' element={<News />} />
                  <Route path='/news/:slug' element={<NewsDetail />} />
                </Routes>
              </MainLayout>
            } />
          </Routes>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
