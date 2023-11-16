import { currencyFormat } from "./utils";
import { TrendingDown, TrendingUp } from "../Icons/Icons";
import { Link } from "react-router-dom";
const Coin = ({ coin }) => {
    console.log(coin);
  return (
    <Link to={`/coin/${coin.id}`}>
      <div className="grid grid-cols-2  md:grid-cols-5 font-light mx-auto items-center pb-4 mt-2 p-4 rounded-3xl hover:bg-indigo-600 bg-black w-full justify-center">
            {/* API Image */}
            <img className="mt-2 w-6 md:w-10 mx-auto" src={coin.image} alt={coin.name}></img>
            {/* API Name */}
            <p className="text-white mx-auto justify-center">{coin.name}</p>
            {/* API Price*/}
            <span className="w-full text-center justify-center mx-auto text-white">{currencyFormat(coin.current_price)}</span>
            {/* API Price Change */}
            <span className={`text-center justify-center mx-auto ${coin.price_change_percentage_24h < 0 ? 'text-red-400' : 'text-green-400'}`}>
                {coin.price_change_percentage_24h < 0 ? <TrendingDown /> : <TrendingUp />}
                {coin.price_change_percentage_24h}
            </span>
            {/* API MarketCap */}
            <span className="text-white mx-auto text-center hidden lg:block">    
              <p className="font-semibold text-white justify-center pt-2">Market Cap</p>
              {currencyFormat(coin.market_cap)}
            </span>
      </div>
    </Link>
  )
}
export default Coin
