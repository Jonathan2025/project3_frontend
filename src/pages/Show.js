import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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

  // Now we will get the URL of the API
  //const URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=${API_KEY}`

  
  // Now we need to set up a state hook to our component 
  const [fundAPIData, setFundAPIData] = useState(null)
  const getAPIData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data)
    setFundAPIData(data)
  }

  React.useEffect(()=> {
    getAPIData()
  }, [])



  //handling for delete
  const removeFund = (e) => {
    e.preventDefault()
    props.deleteFund(fund._id);
    navigate("/jxfunds");
  }

  return (
    <>
      <div className="fundInfo">
        <h1> Fund Show Page </h1>
        <p>{fund.name}</p>
        <p>{fund.company}</p>
        <p>{fund.symbol}</p>
        <p>{fund.description}</p>
        <p>{fund.recommendation}</p>
        <p>{fund.date}</p>
        <p>{fund.timezone}</p>
        <p>{fund.price}</p>
        <p>{fund.dividends}</p>

      
      </div>
      <button>Edit</button>
      <button onClick = {removeFund}>Delete</button>
      <div className="comments">
        <h1>comments will go here</h1>
      </div>
    </>
  );
};

export default Show;
