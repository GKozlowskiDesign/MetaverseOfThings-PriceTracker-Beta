import Markets from "../componets/Markets"
import Navigation from "../componets/Navbar"


const CryptoTokens = () => {
    return (
        <div className=" bg-gradient-to-r from-black to-gray-900 p-2">
            <Navigation />
            <div className="wrapper-container p-2 mx-auto">
                <Markets/>
            </div>
        </div>
        
    )
}

export default CryptoTokens
