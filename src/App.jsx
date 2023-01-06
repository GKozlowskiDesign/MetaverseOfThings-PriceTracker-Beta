import { BrowserRouter, Routes, Route } from "react-router-dom";
import CryptoHome from './pages/CryptoHome';
import CryptoDetail from './pages/CryptoDetail';
import Navigation from './componets/Navigation';
import Hero from "./componets/Hero";
import 'flowbite';




function App() {

  return (
    <BrowserRouter>
    <Navigation />
    <Hero />
    <Routes>
      <Route path="/" element={<CryptoHome />} />
      <Route path="/coin/:id" element={<CryptoDetail />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
