import Markets from "../componets/Markets"
import Trending from "../componets/Trending"

const CryptoHome = () => {
    return (
        <div className="bg-gradient-to-b from-black via-purple-900 to-indigo-700">
        <div className="wrapper-container ">
            <Trending />
            <Markets />
        </div>
        </div>
        
    )
}

export default CryptoHome
