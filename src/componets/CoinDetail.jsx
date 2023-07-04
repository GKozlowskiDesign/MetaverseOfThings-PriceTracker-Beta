import { useParams } from 'react-router-dom';
import useAxios from '../Hooks/useAxios';
import Skeleton from './Skeleton';



const CoinDetail = () => {
  const { id } = useParams();
  const { response } = useAxios(`coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false`);
  
  
  if(!response) {
    return (
      <div className="wrapper-container">
        <Skeleton className="h-8 w-32 mb-4" />
        <Skeleton className="h-72 w-full mb-10" />

      </div>
    )
  }
  return (
<div className='pt-10 mx-auto  w-full rounded-xl'>
  <div className='pt-6 p-2 mx-auto  w-full rounded-xl'>
    <ul className='rounded-xl ring-2 ring-gray-600 shadow-xl '>  
        <div className='flex flex-row'>
        </div>
        <div className='flex flex-row bg-transparent rounded-xl'>
        <img className="rounded-xl p-4" src={response.image.small} alt={response.name} />
        <h1 className='p-4 text-2xl text-white rounded-xl mt-3'>{response.name}</h1>
        <h1 className='p-4 text-base text-purple-500 mt-4 rounded-xl uppercase'>({response.symbol})</h1>
        </div>
   </ul>     
  </div>    
</div>
  )
}

export default CoinDetail

