import Trending from "../componets/Trending"
import Navigation from "../componets/LandingPage"


const CryptoTokens = () => {
    return (
        <div className="bg-gradient-to-r from-black via-gray-900 to-indigo-900 p-6">
        <Navigation/>
            <div className="wrapper-container p-2 mx-auto">
            <Trending />
            </div>
        </div>
    )};

export default CryptoTokens