import Markets from "../componets/Markets"
import Trending from "../componets/Trending"

const CryptoHome = () => {
    return (
        <div className="bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="wrapper-container ">
            <Trending />
            <Markets />
        </div>
        </div>
        
    )
}

export default CryptoHome