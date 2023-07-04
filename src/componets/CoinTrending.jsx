import { Link } from "react-router-dom"

const CoinTrending = ({ coin }) => {
  return (
    
    <Link to={`/coin/${coin.id}`}>
      
      <div className="font-light  mt-4 rounded-xl p-2 ring-2 ring-gray-400 hover:bg-indigo-700 bg-black shadow-2xl">
          <div className="flex flex-row bg-gradient-to-b from-gray-900  to-white rounded-xl">
          <div className="text-center justify-center"> 
           <img className="w-full justify-center text-center mx-auto p-2 pl-40" src={coin.small} alt={coin.name} />
          </div>
          <div>
            <p className="text-center text-purple-600 uppercase text-2xl mx-auto p-2 pl-40 ">{coin.name}</p>
           </div>
          </div>
        </div>

    </Link>
  )
}

export default CoinTrending