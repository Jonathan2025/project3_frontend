import { useState, useEffect } from "react";


const SectorsGraph = ({fund}) => {
    // To use the API we will need the API KEY and the symbol of the fund we want to see info on
    const API_KEY = process.env.REACT_APP_EOD_API_KEY
    const symbol = fund.symbol
    
    // we will update the url for the API once we are ready
    const URL = `https://eodhistoricaldata.com/api/fundamentals/VTI.US?api_token=demo`


    // Now we need to set up a state hook to our component and then state for the timeSeriesData
    const [fundAPIData, setFundAPIData] = useState(null)
    const [sectorsData, setSectorsData] = useState(null)
 

    // this useEffect will only run once the component mounts
    useEffect(() => {
        const getAPIData = async () => {
            const response = await fetch(URL)
            const data = await response.json()
            console.log(data)
            setFundAPIData(data)
            
            }
        getAPIData()
    }, [])










    return(
        <h1>This will be the placeholder for the Sectors Graph</h1>
    )
}


export default SectorsGraph