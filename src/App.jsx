import { BrowserRouter, Routes, Route } from "react-router-dom";
import CryptoHome from './pages/CryptoHome';
import CryptoDetail from './pages/CryptoDetail';
import Footer from './componets/Footer';
import 'flowbite';




function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CryptoHome />} />
      <Route path="/coin/:id" element={<CryptoDetail />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
