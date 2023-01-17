import { BrowserRouter, Routes, Route } from "react-router-dom";
import CryptoHome from './pages/CryptoHome';
import CryptoBlog from './pages/CryptoBlog';
import CryptoDetail from './pages/CryptoDetail';
import CryptoTokens from './pages/CryptoTokens';
import Footer from './componets/Footer';
import 'flowbite';




function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CryptoHome />} />
      <Route path="/coin/:id" element={<CryptoDetail />} />
      <Route path="/tokens" element={<CryptoTokens />} />

     <Route path="/blog" element={<CryptoBlog />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
