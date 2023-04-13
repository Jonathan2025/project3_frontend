import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


// pass in the fund prop from the Show.js
const Graph = ({fund}) => {
  // To use the API we will need the API KEY and the symbol of the fund we want to see info on
  const API_KEY = process.env.REACT_APP_API_KEY
  const symbol = fund.symbol

  // Now we will get the URL of the API when ready please remove the comment for the first url. BUT for testing please use the second url
  //const URL = ADD IN THE ACTUAL URL WHEN READY
  const URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=demo`
  
  // Now we need to set up a state hook to our component and then state for the timeSeriesData
  const [fundAPIData, setFundAPIData] = useState(null)
  const [metaData, setMetaData] = useState(null)
  const [timeSeriesData, setTimeSeriesData] = useState(null)
  
  // this useEffect will only run once the component mounts
  useEffect(() => {
    const getAPIData = async () => {
      const response = await fetch(URL)
      const data = await response.json()
      console.log(data)
      setFundAPIData(data)
      
      //set the metadata state variable
      setMetaData(data['Meta Data'])

      // set the timeSeriesData state variable 
      setTimeSeriesData(data["Time Series (Daily)"])

      
    }
    getAPIData()
  }, [])

  return (
    <>
        {/* now lets try to get the specific parts of the metaData  */}
        {/* only show the information when the metaData has been updated by the state */}
        {metaData && (
          <>
            <p>Symbol: {metaData['2. Symbol']}</p>
            <p>Last Refreshed: {metaData['3. Last Refreshed']}</p>
            <p>Time Zone: {metaData['5. Time Zone']}</p>
          </>
        )}

        {/* if the timeSeriesData exist/ state has been updated, then use the date as the unique key and then return the close price and dividend amount */}
        {/* {timeSeriesData &&
        Object.keys(timeSeriesData).map((date) => (
          <div key={date}>
            <p>Date: {date}</p>
            <p>Close price: {timeSeriesData[date]["4. close"]}</p>
            <p>Dividend amount: {timeSeriesData[date]["7. dividend amount"]}</p>
          </div>
        ))}  */}

  
    </>
  );
};

export default Graph;
