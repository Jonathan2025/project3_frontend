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

const HistoricalGraph = ({fund}) => {

    // To use the API we will need the API KEY and the symbol of the fund we want to see info on
    const API_KEY = process.env.REACT_APP_API_KEY
    const symbol = fund.symbol

    // Now we will get the URL of the API when ready please remove the comment for the first url. BUT for testing please use the second url
    //const URL = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=${symbol}&apikey=${API_KEY}`
    const URL = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=IBM&apikey=demo`


    // Create a use state 
    const [monthlyAdjustedCloseData, setMonthlyAdjustedCloseData] = useState(null)

    //add the use effect 
    // this useEffect will only run once the component mounts
    useEffect(() => {
        const getAPIData = async () => {
            const response = await fetch(URL)
            const data = await response.json()
            console.log(data)
            setMonthlyAdjustedCloseData(data)
            

            
            }
        getAPIData()
    }, [])

    console.log(monthlyAdjustedCloseData)

    return(
        <h1>This will be the Historical graph </h1>
    )
}

export default HistoricalGraph
