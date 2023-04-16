import { useState, useEffect } from "react";
import {Line} from 'react-chartjs-2'

// pass in the fund prop from the Show.js
const DividendGraph = ({fund}) => {
  // To use the API we will need the API KEY and the symbol of the fund we want to see info on
  const API_KEY = process.env.REACT_APP_API_KEY
  const symbol = fund.symbol

  // Now we will get the URL of the API when ready please remove the comment for the first url. BUT for testing please use the second url
  //const URL = ADD IN THE ACTUAL URL WHEN READY
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


   



  return (
    <div className="data">

   
    </div>
  );
};

export default DividendGraph;
