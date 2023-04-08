import { useEffect, useState } from "react";
import {Routes, Route} from 'react-router-dom';
import Create from "../pages/Create";
import Index from "../pages/Index";
import Show from "../pages/Show";

const Main = (props) => {
    //state to hold list of funds 
    const [funds, setFunds] = useState(null);
    //url for backend
    // const URL = process.env.REACT_APP_BACKEND_URL;
    const URL = "http://localhost:4000/jxfunds/"
    console.log(URL)

    //function to make the api call 
    const getFunds = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setFunds(data);
        console.log("API Call complete")
        console.log(data);
    };
    const createFund = async (fund) => {
        //make post request to create a fund
        await fetch(URL, {
            method: "post",
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(fund),
        });
        //update list of funds
        getFunds();
    };

    // Need useEffect in order to fetch the data and diplay it as soon as the component is rendered on the page
    useEffect(()=> {
        getFunds()
    }, [])

    return(
        <div className='main'>
             <Routes>
                {/* route to hit index page of posted funds */}
                <Route path="/jxfunds" element={<Index funds={funds} createFund={createFund}/>}/>
                {/* route to hit create page */}
                <Route path="/jxfunds" element={<Create funds={funds} createFund={createFund}/>}/>
                {/* route to hit show page of specific funds post */}
                <Route path="/jxfunds/:id" element={<Show />}/>
             </Routes>
        </div>
    );
};

export default Main;