import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Landing from "./Landing"

import React from "react"

const Show = (props) => {
  const params = useParams();
  const navigate = useNavigate()
  const id = params.id;
  const funds = props.funds;
  console.log(funds);
  const fund = funds.find((f) => f._id === id);

  // To use the API we will need the API KEY and the symbol of the fund we want to see info on
  const API_KEY = process.env.REACT_APP_API_KEY
  const symbol = fund.symbol

  // Now we will get the URL of the API when ready please remove the comment for the first url. BUT for testing please use the second url
  //const URL = ADD IN THE ACTUAL URL WHEN READY
  const URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=demo`
  
  // Now we need to set up a state hook to our component 
  const [fundAPIData, setFundAPIData] = useState(null)
  const getAPIData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data)
    setFundAPIData(data)

    // accessing the api data
   console.log("here is the new api data", fundAPIData)
   // now access just the meta data 
   const metaData = fundAPIData['Meta Data']
   console.log("this is the meta data", metaData)
 
   // then access just the time series data 
   const timeSeriesData = fundAPIData['Time Series (Daily)']
   console.log("This is time series data ", timeSeriesData)

    // now see if we can access each date and then the value 
    for (const date in timeSeriesData) {
      console.log("Date", date)
      // access the close price
      console.log(timeSeriesData[date]['4. close'])
      // access dividends if any 
      console.log(timeSeriesData[date])
    }

  }
  

  React.useEffect(()=> {
    getAPIData()
  }, [])


  //linking edit btn to edit route
  const editForm = (e) => {
    navigate(`/jxfunds/edit/${fund._id}`)
  }
  


  //handling for delete
  const removeFund = (e) => {
    e.preventDefault()
    props.deleteFund(fund._id);
    navigate("/jxfunds");
  }

  return (
    <>
      <div className="fundInfo">
        <h1> {fund.name} </h1>

        <h3> Company: <br/>{fund.company}</h3>
        <h3>Symbol: <br/>{fund.symbol}</h3>
        <h3> Description: <br/>{fund.description}</h3>
        <h3> Recommendation: <br/>{fund.recommendation}</h3>
        <h3>Date: <br/>{fund.date}</h3>
        <h3>Timezone: <br/>{fund.timezone}</h3>
        <h3> Price: <br/>{fund.price}</h3>
        <h3> Dividends: <br/>{fund.dividends}</h3>
    
       <button className='editBtn' onClick={editForm}>Edit</button>
      <button className='deleteBtn' onClick = {removeFund}>Delete</button>

      </div>

   

      <div className="comments">
        <h1 className='commentsTitle'>comments will go here</h1>
      </div>
    </>
  );
};

export default Show;
