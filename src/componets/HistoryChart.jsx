

import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from "moment";
import Skeleton from "./Skeleton";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);


const HistoryChart = () => {
  const { id } = useParams();
  const { response } = useAxios(`coins/${id}/market_chart?vs_currency=usd&days=7`);
  
  if(!response) {
    return (
      <div className="wrapper-container mx-auto pb-10">
        <Skeleton className="h-100 w-full" />
      </div>
    )
  }
  const coinChartData = response.prices.map(value => ({ x: value[0], y: value[1].toFixed(2) }));
  
  const options = {responsive: true}

  const data = {labels: coinChartData.map(value => moment(value.x).format('MMM DD')),
  datasets: [
      {
        fill: true,
        label: id,
        data: coinChartData.map(val => val.y),
        borderColor: '#674ccd        ',
        backgroundColor: '#3e375c ',
      }
    ]
  }

  return (
    <div className="p-2 mx-auto w-full rounded-xl">
      <div className="bg-gray-900 ring-2 ring-gray-600 rounded-xl shadow-xl mx-auto">
      <h3 className='text-3xl text-white p-4 mx-auto pt-6 rounded-xl'>Price<span className="text-xs text-purple-500">  
      <br></br>Coingecko API Real-Time</span></h3>
        <Line className="mx-auto p-4 bg-black rounded-xl w-full ring-2 ring-gray-600" options={options} data={data} />
      </div>
    </div>
  )
}

export default HistoryChart
