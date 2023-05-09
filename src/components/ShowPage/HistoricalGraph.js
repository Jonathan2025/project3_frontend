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
            // console.log("this will be the historical", data)
            setMonthlyAdjustedCloseData(data["Monthly Adjusted Time Series"])
            }
        getAPIData()
    }, [])

    
    // console.log("monthly close data", monthlyAdjustedCloseData)


    const data = {
        labels: monthlyAdjustedCloseData ? Object.keys(monthlyAdjustedCloseData).reverse() : [], 
        datasets: [{
            label: 'Historical Prices',
            data: monthlyAdjustedCloseData ? Object.values(monthlyAdjustedCloseData).map((date) => date['4. close']).reverse() : [],
            backgroundColor: 'orange',
            borderColor: 'orange',
            pointBorderColor: 'black',
            fill: true,
            borderJoinStyle: 'round'
           
        
        }]
      }

    // getting the min and max from the data points and then rounding them to the nearest whole number. Basically we need to make sure that the monthly data renders first
    // then we can get the min and max price, else set them to 0 and 500 respectively
    const minPrice = monthlyAdjustedCloseData ? Math.min(...Object.values(monthlyAdjustedCloseData).map((date) => parseFloat(date['4. close']))) : 0;
    const maxPrice = monthlyAdjustedCloseData ? Math.max(...Object.values(monthlyAdjustedCloseData).map((date) => parseFloat(date['4. close']))) : 500;
    const roundedMin = Math.floor(minPrice);
    const roundedMax = Math.ceil(maxPrice)

      console.log(maxPrice)
      console.log(minPrice)

      const options = {

        plugins:{
            legend: true
        }, 
        scales: {
            y: {
                min: minPrice,
                max: maxPrice,
                ticks: {
                    stepSize: 10
                  }
            }
        }
      }

    return(
            <div className="data">
                <div className="HistoricalGraph">
                    <h1>Historical Price</h1>
                        {/* Render the Line component only when monthlyAdjustedCloseData is not null */}
                        {monthlyAdjustedCloseData && (
                            <Line data={data} options={options} />
                        )}
                </div>
        </div>
    )   
}

export default HistoricalGraph
