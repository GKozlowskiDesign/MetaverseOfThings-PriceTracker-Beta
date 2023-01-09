import CoinDetail from "../componets/CoinDetail"
import HistoryChart from "../componets/HistoryChart"
import CoinInfo from "../componets/CoinInfo"
const CryptoDetail = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-700 to-black w-full p-4"> 
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
