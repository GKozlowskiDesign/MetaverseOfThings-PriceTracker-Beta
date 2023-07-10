import { BrowserRouter, Routes, Route } from "react-router-dom";
import CryptoDetail from './pages/CryptoDetail';
import CryptoTokens from './pages/CryptoTokens';
import CryptoBlog from './pages/CryptoBlog';
import Footer from './componets/Footer';
import CryptoTrending from './pages/CryptoTrending';
import 'flowbite';




function App() {

  return (
    <BrowserRouter>
   
    <Routes>
    
      <Route path="/coin/:id" element={<CryptoDetail />} />
      <Route path="/" element={<CryptoTokens />} />
      <Route path="/education" element={<CryptoBlog />} />
      <Route path="/trending" element={<CryptoTrending />} />

    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
