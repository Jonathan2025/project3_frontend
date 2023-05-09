import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale, // for x axis
    LinearScale, // for the y axis
    Legend
} from 'chart.js'

ChartJS.register(
    BarElement,
    CategoryScale, // for x axis
    LinearScale, // for the y axis
    Legend
)

// pass in the fund prop from the Show.js
const DividendGraph = ({fund}) => {
  // To use the API we will need the API KEY and the symbol of the fund we want to see info on
  const API_KEY = process.env.REACT_APP_API_KEY
  const symbol = fund.symbol

  // When ready we will replace the symbol and the api key to get the actual data
  //const URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=${symbol}`
  const URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=VFINX&apikey=%7bapikey%7d`

  // Now we need to set up a state hook to our component and then state for the timeSeriesData
  const [timeSeriesData, setTimeSeriesData] = useState(null)

  // this useEffect will only run once the component mounts
  useEffect(() => {
    const getAPIData = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        // console.log("Getting Dividend Data", data)

        // set the timeSeriesData state variable 
        setTimeSeriesData(data["Time Series (Daily)"])
    }
    getAPIData()
  }, [])

  // console.log("here is the dividends timeseries data", timeSeriesData)
   

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
  // we only want the dates that have a dividend that was distributed
  const nonZeroLabels = timeSeriesData
  ? Object.entries(timeSeriesData)
      .filter(([_, data]) => parseFloat(data['7. dividend amount']) > 0)
      .map(([date]) => date)
      .reverse()
  : [];

  const data = {
    labels: nonZeroLabels,
    datasets: [{
        label: 'Dividends (Dollar per Share) Distributed',
        data: nonZeroLabels.map(
            (date) => timeSeriesData[date]['7. dividend amount']
          ),
        backgroundColor: '#32de84',
        borderColor: '#32de84',
        borderWidth: 1
    }]
  }

// console.logs to see what we get as data and how to access them
//   console.log("lets see the data labels", data.labels)
//   console.log("lets see data.data", data.datasets[0].data)
//   console.log("Non-zero labels:", nonZeroLabels);

  return (
    <div className="dividendGraph">
        <h1>Dividends</h1>
        <Bar
            data={data}
        ></Bar>
   
    </div>
  );
};

export default DividendGraph;
