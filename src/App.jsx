import { BrowserRouter, Routes, Route } from "react-router-dom";
import CryptoHome from './pages/CryptoHome';
import CryptoDetail from './pages/CryptoDetail';
import Hero from "./componets/Hero";
import 'flowbite';




function App() {

  return (
    <BrowserRouter>
    <Hero />
    <Routes>
      <Route path="/" element={<CryptoHome />} />
      <Route path="/coin/:id" element={<CryptoDetail />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
