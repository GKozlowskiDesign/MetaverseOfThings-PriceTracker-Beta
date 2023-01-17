import Markets from "../componets/Markets"
import Trending from "../componets/Trending"
import Navigation from "../componets/Navigation"

const CryptoHome = () => {
    return (
      <div className="p-2 bg-gradient-to-r from-black via-gray-900 to-indigo-900"> 
        <Navbar/>
            <div className="wrapper-container p-4 Profile-center">
            <Trending />
            <Markets />
        </div>
        </div>
        
    )
}

export default CryptoHome
