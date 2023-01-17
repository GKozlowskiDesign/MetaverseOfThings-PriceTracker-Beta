

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
  
    
    <div className="font-light  mt-4 rounded-xl p-4 ring-2 ring-gray-600 bg-gray-900 shadow-2xl">

      
    
<div>
  <p className="text-purple-500 pb-10">Total 100 Recognized Tokens</p>
</div>
<h1 className="text-3xl mb-2 text-gray-600">Tokens</h1>

<div className="flex flex-row  bg-gray-900 rounded-xl">

    <section className="rounded-xl">
{response && response.map(coin => <Coin key={coin.id} coin={coin}/>)}
  </section>
    </div>
  </div>
  )
}

export default Markets

