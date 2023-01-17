import { BrowserRouter, Routes, Route } from "react-router-dom";
import CryptoDetail from './pages/CryptoDetail';
import CryptoTokens from './pages/CryptoTokens';
import Footer from './componets/Footer';
import 'flowbite';




function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/coin/:id" element={<CryptoDetail />} />
      <Route path="/" element={<CryptoTokens />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
