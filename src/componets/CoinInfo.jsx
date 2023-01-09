import { useParams } from 'react-router-dom';
import useAxios from '../Hooks/useAxios';
import Skeleton from './Skeleton';



const CoinInfo = () => {
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
    <div className='bg-black pb-20'>
  
<div id="accordion-collapse" data-accordion="collapse" className='p-8 ring-gray-900 bg-gray-900 ring-4 rounded-xl'>
<h1 className='text-white text-xl justify-center rounded p-2 text-left'>Description</h1>

        <div class="font-lightrounded-xl">
        <p className='mt-2 p-2 rounded-xl text-base  text-gray-500 [&>a]:text-blue-600 [&>a]:underline' dangerouslySetInnerHTML={{ __html: response.description.en }}></p> 
    </div>
</div>
</div>
  )
}

export default CoinInfo




