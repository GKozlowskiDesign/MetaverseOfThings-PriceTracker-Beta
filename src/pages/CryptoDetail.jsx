import CoinDetail from "../componets/CoinDetail"
import HistoryChart from "../componets/HistoryChart"



const CryptoDetail = () => {
  return (
    <div className="bg-black w-full">  
    <div className="wrapper-container pt-10 bg-black w-full">
     <HistoryChart />
     <CoinDetail />
    </div>
    </div>
  
  )
}

export default CryptoDetail