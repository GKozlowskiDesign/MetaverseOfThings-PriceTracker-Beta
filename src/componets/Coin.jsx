import { currencyFormat } from "./utils";
import { TrendingDown, TrendingUp } from "../Icons/Icons";
import { Link } from "react-router-dom";


const Coin = ({ coin }) => {
    console.log(coin);
  return (
    <Link to={`/coin/${coin.id}`}>
    <div className="grid sm:grid-cols-3  md:grid-cols-5 font-light mx-auto items-center pt-4 pb-4 mt-6 rounded-xl ring-2 ring-gray-900 hover:bg-indigo-600 bg-white">
      
        <img className="mt-2 w-6 md:w-10 mx-auto" src={coin.image} alt={coin.name}></img>
        <p className="text-white mx-auto p-4">{coin.name}</p>
        <span className="w-full text-center p-4 mx-auto text-white">{currencyFormat(coin.current_price)}</span>
        <span className={`text-center mx-auto ${coin.price_change_percentage_24h < 0 ? 'text-red-400' : 'text-green-400'}`}>
            {coin.price_change_percentage_24h < 0 ? <TrendingDown /> : <TrendingUp />}
          {coin.price_change_percentage_24h}
        </span>

      
          <span className="text-white mx-auto text-center hidden lg:block">    
          <p className="font-semibold text-white">Market Cap</p>
          {currencyFormat(coin.market_cap)}
          </span>

    </div>
    </Link>
  
  )
}

export default Coin
