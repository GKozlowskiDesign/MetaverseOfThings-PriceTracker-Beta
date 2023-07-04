import Navigation from "../componets/Navigation"
import Trending from "../componets/Trending"

const CryptoHome = () => {
    return (
        <div className="bg-gradient-to-r from-black via-gray-900 to-indigo-900 p-6">
        <Navigation/>
            <div className="wrapper-container p-12 mx-auto">
        <Trending/>
        </div>
     </div>
    )
}

export default CryptoHome
