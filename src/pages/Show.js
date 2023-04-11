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
  }
  


  // accessing the api data
  console.log("here is the api data", fundAPIData)
  const keys = Object.keys(fundAPIData)
  console.log("getting the time series data first", fundAPIData['Time Series (Daily)'])
  // now we are able to get the dates and their respective prices and information 
  // now lets see how we can console log using a for loop to get the date and the object on each line
  

  // for (const date in fundAPIData['Time Series (Daily)']) {
  //   console.log('here is the date and the respective informaiton')
  //   console.log(date, fundAPIData['Time Series (Daily)'][date])
  // }




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
        <p>{fund.company}</p>
        <p>{fund.symbol}</p>

        {/* <p>{fund.description}</p>
        <p>{fund.recommendation}</p>
        <p>{fund.date}</p>
        <p>{fund.timezone}</p>
        <p>{fund.price}</p>

        {/* first just see if we can render the fundAPIData on the Page */}
        {/* <p>{fundAPIData}</p> */}



      </div>

      <button className='editBtn' onClick={editForm}>Edit</button>
      <button className='deleteBtn' onClick = {removeFund}>Delete</button>

      <div className="comments">
        <h1>comments will go here</h1>
      </div>
    </>
  );
};

export default Show;
