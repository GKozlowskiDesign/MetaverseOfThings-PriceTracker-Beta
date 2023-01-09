import { useParams } from "react-router-dom";
import useAxios from "../Hooks/useAxios"
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
        <Skeleton className="h-72 w-full" />
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
        borderColor: 'rgb(201, 40, 192)',
        backgroundColor: 'transparent',
      }
    ]
  }

  return (
    <div className="pb-10 mx-auto">
      <div className="bg-gray-900 rounded-xl mx-auto">
        <Line className="mx-auto p-6 rounded-xl w-full" options={options} data={data} />
      </div>
    </div>
  )
}

export default HistoryChart
