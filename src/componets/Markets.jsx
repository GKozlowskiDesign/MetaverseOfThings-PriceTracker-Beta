

import useAxios from "../Hooks/useAxios"
import Coin from "../componets/Coin";
import Skeleton from "./Skeleton";

const Markets = () => {
  const { response, loading } = useAxios('coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');

  if(loading) {
    return (
      <div className="wrapper-container pt-10">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
      </div>
    )
  }

  return (
  <div className="font-light justify-center rounded-xl mx-auto md:p-10 bg-gray-900 p-2 w-full border-gray-500 border-2">   
    <div>
      <p className="text-sm text-purple-500 justify-center flex">Total 100 Recognized Tokens</p>
    </div>
    <h1 className="text-3xl text-gray-600 justify-center flex mt-1 mb-1">Tokens</h1>
      <div className="flex justify-center flex-row  bg-gray-900 rounded-xl">
      <section className="rounded-xl">
      {response && response.map(coin => <Coin key={coin.id} coin={coin}/>)}
      </section>
    </div>
  </div>
  )
}

export default Markets

