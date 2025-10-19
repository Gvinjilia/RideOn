import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { AuthProvider } from './context/AuthContext.jsx'
import { BikeProvider } from './context/BikeContext.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { OrderProvider } from './context/OrderContext.jsx'
import { UserProvider } from './context/UserContext.jsx'
import { ReviewProvider } from './context/ReviewContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <BikeProvider>
          <CartProvider>
            <OrderProvider>
              <UserProvider>
                <ReviewProvider>
                  <App />
                </ReviewProvider>
              </UserProvider>
            </OrderProvider>
          </CartProvider>
        </BikeProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
