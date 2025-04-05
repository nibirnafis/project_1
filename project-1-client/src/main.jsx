import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Routes from './Routes/Routes'
import AuthProvider from './Firebase/AuthProvider'
import ProductProvider from './Database/ProductProvider'
import CartProvider2 from './Components/CartProvider2'



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
          <ProductProvider>
              <CartProvider2>
                  <Routes></Routes>
              </CartProvider2>
          </ProductProvider>
      </AuthProvider>
  </StrictMode>,
)
