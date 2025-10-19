import { Route, Routes, useNavigate } from "react-router"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Nav from "./components/Nav"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import { useAuth } from "./context/AuthContext"
import Cart from "./pages/Cart"
import Orders from "./pages/Orders"
import Checkout from "./pages/Checkout"
import Bike from "./pages/Bike"
import { useEffect } from "react"
import Shop from "./pages/Shop"
import About from "./pages/About"
import ContactUs from "./pages/ContactUs"
import MeetOurTeam from "./pages/MeetOurTeam"
import Users from "./pages/Users"

function App() {
  const { user, autoLogin } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    autoLogin();

    navigate('/profile');
  }, []);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={user ? <Profile /> : <Login />} />
        <Route path="/bikes/:bikeId" element={<Bike />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/meetOurTeam" element={<MeetOurTeam />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  )
}

export default App
