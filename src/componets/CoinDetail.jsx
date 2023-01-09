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
    <div className='pt-10 pb-10'>
      <div className='p-6 bg-gray-900 flex gap-2 items-center ring-4 ring-gray-900 rounded-xl'>
        <img className="rounded-xl" src={response.image.small} alt={response.name} />
        <h1 className='text-3xl capitalize font-bold text-white'>{response.name}</h1>
      </div>  
</div>
  )
}

export default CoinDetail




