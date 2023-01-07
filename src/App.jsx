import { BrowserRouter, Routes, Route } from "react-router-dom";
import CryptoHome from './pages/CryptoHome';
import CryptoDetail from './pages/CryptoDetail';
import Navigation from './componets/Navigation';
import Footer from './componets/Footer';
import 'flowbite';




function App() {

  return (
    <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<CryptoHome />} />
      <Route path="/coin/:id" element={<CryptoDetail />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
