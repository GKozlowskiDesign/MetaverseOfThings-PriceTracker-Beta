import { BrowserRouter, Routes, Route } from "react-router-dom";
import CryptoDetail from './pages/CryptoDetail';
import CryptoTokens from './pages/CryptoTokens';
import Education from './pages/CryptoBlog';
import Footer from './componets/Footer';
import Trending from './pages/CryptoTrending';
import 'flowbite';




function App() {

  return (
    <BrowserRouter>
   
    <Routes>
    
      <Route path="/coin/:id" element={<CryptoDetail />} />
      <Route path="/" element={<CryptoTokens />} />
      <Route path="/education" element={<Education />} />
      <Route path="/trending" element={<Trending />} />

    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
