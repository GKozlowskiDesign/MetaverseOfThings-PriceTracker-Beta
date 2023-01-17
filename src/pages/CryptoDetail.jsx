import CoinDetail from "../componets/CoinDetail"
import HistoryChart from "../componets/HistoryChart"
import CoinInfo from "../componets/CoinInfo"
import Navigation from "../componets/Navigation"
const CryptoDetail = () => {
  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-indigo-900 w-full p-6"> 
          <Navigation/>
        <div className="wrapper-container mx-auto w-full">
        <CoinDetail />
        </div>
       
        <div className="wrapper-container mx-auto w-full">
        <HistoryChart/>
        </div>

        <div className="wrapper-container mx-auto w-full">
        <CoinInfo/>
        </div>
    </div>
  
  )
}

export default CryptoDetail
