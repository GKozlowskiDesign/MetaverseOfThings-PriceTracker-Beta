import Markets from "../componets/Markets"
import Navigation from "../componets/Navigation"
import Hero from "../componets/Hero"


const CryptoTokens = () => {
    return (
        <div className="bg-gradient-to-r from-black via-gray-900 to-indigo-900 p-6">
            
              <Navigation/>
                <Hero />
        <div className="wrapper-container p-12 mx-auto">
            <Markets />
        </div>
        </div>
        
    )
}

export default CryptoTokens
