import { useEffect, useState } from "react";
import {Routes, Route} from 'react-router-dom';
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
    // makes a post request to create a fund
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
    //makes a request to update fund
    const updateFund = async (fund, id) => {
        await fetch(URL + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(fund),
        });
        //update list of funds
        getFunds();
    };
    //makes a request to DELETE a fund
    const deleteFund = async (id) => {
        await fetch(URL + id, {
            method: "DELETE",
        });
        //update list of people
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
                <Route path="/jxfunds" element={<Index 
                funds={funds} 
                createFund={createFund}/>}/>
                {/* route to hit show page of specific funds post */}
                <Route path="/jxfunds/:id" element={<Show 
                funds={funds} 
                updateFund={updateFund}
                deleteFund={deleteFund}/>}/>
             </Routes>
        </div>
    );
};

export default Main;