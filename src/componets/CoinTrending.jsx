import { Link } from "react-router-dom"

const CoinTrending = ({ coin }) => {
  return (
    
    <Link to={`/coin/${coin.id}`}>
      <div className="font-light mb-2 mt-4 p-4 rounded-xl ring-2 ring-gray-900 border-black border-2 hover:bg-gray-900 bg-black">
        <div className="flex items-center gap-1">
          <span className="font-semibold text-white">{coin.score+1}.</span>
          <img className="w-8" src={coin.small} alt={coin.name} />
          <p className="text-white">{coin.name}</p>
          <small className="text-xs text-white">({coin.symbol})</small>
        </div>
      </div>
    </Link>
  )
}

export default CoinTrending