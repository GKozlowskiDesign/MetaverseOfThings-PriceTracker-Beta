import Blog from "../componets/Blog"
import Navigation from "../componets/LandingPage"


const CryptoBlog = () => {
    return (
        <div className="bg-gradient-to-r from-black via-gray-900 to-indigo-900 p-6">
              <Navigation/>
        <div className="wrapper-container  p-2 mx-auto">
            <Blog />
        </div>
        </div>
        
    )
}

export default CryptoBlog