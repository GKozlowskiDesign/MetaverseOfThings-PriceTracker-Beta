import Blog from "../componets/Blog"
import Navigation from "../componets/Navigation"
import '../pages/CryptoDetail.css'
import Footer from "../componets/Footer"






const CryptoBlog = () => {
  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-indigo-900 w-full mx-auto"> 
            <Navbar/>

            

        <div className="wrapper-container mx-auto p-4 rounded-lg mb-10">
        <Blog />
        </div>
        
            
 <Footer />
    </div>
  
  )
}

export default CryptoBlog
