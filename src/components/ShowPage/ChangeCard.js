import React from 'react';
import { useState, useEffect } from "react";

function Card({fund}) {
    // To use the API we will need the API KEY and the symbol of the fund we want to see info on
    const API_KEY = process.env.REACT_APP_API_KEY
    const symbol = fund.symbol
  
    // Now we will get the URL of the API when ready please remove the comment for the first url. BUT for testing please use the second url
    // const URL = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol={symbol}&apikey={API_KEY}`
    const URL = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo`


    // Now we need to set up a state hook to our component and then state for the percentChangeData
    const [percentChangeData, setPercentChangeData] = useState(null)
    const [previouseClose, setPreviousClose] = useState(null)
  
    // this useEffect will only run once the component mounts
    useEffect(() => {
      const getAPIData = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)
        
        // set the data to be the percent change data 
        setPercentChangeData(data['Global Quote']['10. change percent'])
        setPreviousClose(data['Global Quote']['08. previous close'])
        
      }
      getAPIData()
    }, [])


    console.log("this is the percent change data", percentChangeData)
    console.log("this is the previouse close", previouseClose)





  const percent = 25;

  // set color of percent based on its value
  const percentColor = percent > 0 ? 'green' : 'red';

  return (
    <div className="card">
      <div className="card-content">
        <div className="card-title">Change</div>
        <div className="card-body">
          <div className="percent" style={{ color: percentColor }}>{percent}%</div>
        </div>
      </div>
    </div>
  );
}

export default Card;