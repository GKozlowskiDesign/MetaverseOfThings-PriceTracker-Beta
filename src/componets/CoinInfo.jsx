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
        <Skeleton className="h-72 w-full mb-10" />
        <Skeleton className="h-72 w-full mb-10" />
        <Skeleton className="h-72 w-full mb-10" />
      </div>
    )
  }

  return (
    <div className='pt-2 mx-auto p-2 mb-20'>

 <div className='mx-auto'>
    <div class="font-light rounded-xl mx-auto rounded-xl">
        <h3 className='text-3xl text-white p-4 mx-auto pt-6'>
        Description  
        <span className="text-xs text-purple-500">  
          <br></br>
        Coingecko API Real-Time
        </span>
        </h3>


    <div className=' pb-4 p-4 mx-auto bg-black rounded-xl border-2'>
      <ul className='mx-auto'>
      <li className='mt-2 p-2 rounded-xl  text-center mx-auto
      text-base text-gray-500 [&>a]:text-blue-600 [&>a]:underline' dangerouslySetInnerHTML={{ __html: response.description.en }}>
      </li>
      </ul>      
      </div>
     </div>
   </div>


      <div className='mx-auto mt-8'>
    <div class="font-light rounded-xl mx-auto">
    <h3 className='text-3xl text-white p-4 pb-8 pt-10 mx-auto'>Project Information    <span className="text-xs text-purple-500">  
        <br></br>
        Coingecko API Real-Time
        </span></h3>
    <div className=' pb-8 p-4 mx-auto bg-black rounded-xl border-2'>
      <ul className='mx-auto'>


      <h3 className='text-xl text-white p-4'>Contract Address</h3>
         <li className=' p-4 rounded-xl  hover:text-white mx-auto
           text-xs  text-gray-500 [&>a]:text-blue-600 [&>a]:underline  overflow-hidden'  dangerouslySetInnerHTML={{ __html: response.contract_address }} 
             onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}} >
               </li>


           <h3  className='text-lg text-white p-4'>Website Address</h3>  
              <li className='p-4 rounded-xl hover:text-white mx-auto
                 text-xs  text-gray-500 [&>a]:text-blue-600 [&>a]:underline  overflow-hidden' dangerouslySetInnerHTML={{ __html: response.links.homepage }}>
                   </li>


        <h3 className='text-lg text-white p-4'>Twitter Address</h3>
           <li className='p-4 rounded-xl text-xs  text-gray-500 [&>a]:text-blue-600 [&>a]:underline'
             dangerouslySetInnerHTML={{ __html: response.links.twitter_screen_name }}>
               </li>
    </ul>
    </div>       
    </div>
    </div>
    </div>
  )
}

export default CoinInfo






