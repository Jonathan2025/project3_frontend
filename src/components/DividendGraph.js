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
  const URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=VFINX&apikey=%7bapikey%7d`

  // Now we need to set up a state hook to our component and then state for the timeSeriesData
  const [fundAPIData, setFundAPIData] = useState(null)
  const [timeSeriesData, setTimeSeriesData] = useState(null)

  // this useEffect will only run once the component mounts
  useEffect(() => {
    const getAPIData = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        console.log("Getting Dividend Data", data)
        setFundAPIData(data)

        // set the timeSeriesData state variable 
        setTimeSeriesData(data["Time Series (Daily)"])
    }
    getAPIData()
  }, [])

  console.log("here is the dividends timeseries data", timeSeriesData)
   
  const data = {
    labels: timeSeriesData ? Object.keys(timeSeriesData) : [], 
    datasets: [{
        label: 'Dividends Distributed',
        data: timeSeriesData
        ? Object.values(timeSeriesData)
            .map((date) => date['7. dividend amount'])
            .reverse()
            .filter((amount) => amount !== "0.0000") // filter out zero values
        : [],
        backgroundColor: '#1E90FF',
        borderColor: '#1E90FF',
        borderWidth: 1
    }]
  }

  const options ={

  }

  console.log("lets see the data labels", data.labels)
  console.log("lets see data.data", data.datasets[0].data)


  return (
    <div className="dividendData">
        <h1>Just a simple boiler plate</h1>
        <Bar
            data={data}
            options={options}    
        ></Bar>
   
    </div>
  );
};

export default DividendGraph;
