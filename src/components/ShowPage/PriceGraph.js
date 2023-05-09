import { useState, useEffect } from "react";
import {Line} from 'react-chartjs-2'
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale, // for x axis
    LinearScale, // for the y axis
    PointElement,
    Legend, 
    Tooltip
} from 'chart.js'

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement, 
    Legend,
    Tooltip
)

// pass in the fund prop from the Show.js
const PriceGraph = ({fund}) => {
  // To use the API we will need the API KEY and the symbol of the fund we want to see info on
  const API_KEY = process.env.REACT_APP_API_KEY
  const symbol = fund.symbol

  // Now we will get the URL of the API when ready please remove the comment for the first url. BUT for testing please use the second url
  const URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=${API_KEY}`
  //const URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=demo`



  // Now we need to set up a state hook to our component and then state for the timeSeriesData
  const [metaData, setMetaData] = useState(null)
  const [timeSeriesData, setTimeSeriesData] = useState(null)
  // lets create a state where the user gets to decide if they want to see 90 datapoints, 60 or 30
  const [numDataPoints, setNumDataPoints] = useState(90) // default to 90 datapoints

  // this useEffect will only run once the component mounts
  useEffect(() => {
    const getAPIData = async () => {
      const response = await fetch(URL)
      const data = await response.json()
      // console.log(data)
      
      //set the metadata state variable
      setMetaData(data['Meta Data'])

      // set the timeSeriesData state variable 
      setTimeSeriesData(data["Time Series (Daily)"])
    }
    getAPIData()
  }, [])

  //if the timeseriesData exists, which it will, then get the data
  // what selectedData will do is take in the timeseriesData and then slice only the number of data points specified by the user
  const selectedData = timeSeriesData ? Object.entries(timeSeriesData)
    // then we will show only from 0 to the number of datapoints that the user wants to show
    // from the state above, it is set to 90 by default
    .slice(0, numDataPoints)
    // now we use the reduce method, takes 2 arguments 
    // 1) a callback function --> takes 2 agruments 'obj' which is the accumulator and a [key, value] (the current eleemnt in an array)
    // 2) an initial value for an accumulator {}
    .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {})
    : {} // the default value that is returned in case timeSeriesData is null or undefined
    
  

    // we need to reverse the data points so that the data goes from older dates to most recent
  const data = {
    labels: timeSeriesData ? Object.keys(selectedData).reverse() : [], 
    datasets: [{
        label: 'Price of Index Fund',
        data: timeSeriesData ? Object.values(selectedData).map((date) => date['4. close']).reverse() : [],
        backgroundColor: '#1E90FF',
        borderColor: '#1E90FF',
        pointBorderColor: 'black',
        fill: true,
    
    }]
  }

    // getting the min and max from the data points and then rounding them to the nearest whole number
    const minPrice = Math.min(...Object.values(selectedData).map((date) => parseFloat(date['4. close'])));
    const maxPrice = Math.max(...Object.values(selectedData).map((date) => parseFloat(date['4. close'])));
    const roundedMin = Math.floor(minPrice);
    const roundedMax = Math.ceil(maxPrice)


  const options = {
    plugins:{
        legend: true
    }, 
    scales: {
        y: {
            min: roundedMin,
            max: roundedMax,
            ticks: {
                stepSize: 10
              }
        }
    }
  }


  const handleNumDataPointsChange = (event) => {
    setNumDataPoints(parseInt(event.target.value))
  }


  return (
    <>
        <div className="priceGraphData">
        {/* only show the metaData information when the metaData has been updated by the state */}
        {metaData && (
          <>
            <p>Last Refreshed: {metaData['3. Last Refreshed']}</p>
          </>
        )}
        
        {/* add options for 90, 60 and 30 datapoints */}
        <select onChange={handleNumDataPointsChange}>
            <option value="5">5 Days</option>
            <option value="10">10 Days</option>
            <option value="30">30 Days</option>
            <option value="60">60 Days</option>
            <option value="90">90 Days</option>
        </select>
        </div>
        <br></br>

         {/* render the Line component only when timeSeriesData is not null */}
        <div className="priceGraph">
          <h1>Price</h1>
            {timeSeriesData && (
                <Line data={data} options={options} />
            )}
        </div>
    </>      
  );
};

export default PriceGraph;
