import { useParams } from 'react-router-dom';
import useAxios from '../Hooks/useAxios';
import Skeleton from './Skeleton';
const CoinDetail = () => {
  const { id } = useParams();
  const { response } = useAxios(`coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false`);
  
  if(!response) {
    return (
      <div className="wrapper-container bg-black">
        <Skeleton className="h-8 w-32 mb-4" />
        <Skeleton className="h-72 w-full mb-10" />
      </div>
    )
  }
  return (
    <div className='bg-black mb-20'>
      <div className='flex gap-2 items-center'>
        <img src={response.image.small} alt={response.name} />
        <h1 className='text-2xl capitalize font-bold text-white'>{response.name}</h1>
      </div>   
      <div class="p-5 font-light ring-2 ring-gray-900 rounded-xl dark:border-gray-700 dark:bg-gray-900">
         <p className='mt-6 text-gray-500 [&>a]:text-blue-600 [&>a]:underline' dangerouslySetInnerHTML={{ __html: response.description.en }}></p> 
      </div>   
    </div>
  )
}

export default CoinDetail




