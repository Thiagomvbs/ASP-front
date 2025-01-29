import { Route, Routes } from "react-router"
import Home from './pages/Home';
import Rent from './pages/Rent';
import Product from './pages/Product';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/rent" element={<Rent/>} />
      <Route path="/products" element={<Product/>} />
    </Routes>
  )
}

export default App
