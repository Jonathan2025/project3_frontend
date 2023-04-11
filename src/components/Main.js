import { useEffect, useState } from "react";
import {Routes, Route} from 'react-router-dom';
import Create from "../pages/Create";
import Index from "../pages/Index";
import Show from "../pages/Show";
import Edit from "../pages/Edit";
import Landing from "../pages/Landing";
import Account from "../pages/Account";

const Main = (props) => {
    //state to hold list of funds 
    const [funds, setFunds] = useState(null);
    const [users, setUsers] = useState(null);
    //url for backend
    // const URL = process.env.REACT_APP_BACKEND_URL;
    const URL = "http://localhost:4000/jxfunds/"
    console.log(URL)

    //function to make the api call 
    const getFunds = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setFunds(data.data);
        console.log("API Call complete")
        console.log(data.data);
    }

    // makes a post request to create a fund
    const createFund = async (fund) => {
        //make post request to create a fund
        await fetch(URL, {
            method: "POST",
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
        //update list of funds
        getFunds();
    };

    // Need useEffect in order to fetch the data and diplay it as soon as the component is rendered on the page
    useEffect(()=> {
        console.log("Getting funds...")
        getFunds()
    }, [])

    return(
        <main>
             <Routes>
                {/* route to hit the landing page of the app  */}
                <Route path="/" element={<Landing />} />



                {/* route to hit index page of posted funds */}
                <Route path="/jxfunds" element={<Index 
                funds={funds} 
                createFund={createFund}/>}/>
              
                {/* route to hit create page */}
                <Route path="/jxfunds/create" element={<Create 
                funds={funds} 
                createFund={createFund}/>}/>
                
                {/* route to hit show page of specific funds post */}
                <Route path="/jxfunds/:id" element={
                    funds && (
                    <Show
                        funds={funds}
                        updateFund={updateFund}
                        deleteFund={deleteFund}
                        />)} />

               {/* route to hit the edit page of that specific fund */}
	            <Route path="/jxfunds/edit/:id" 
                element={
                    funds && (
                      <Edit funds={funds} updateFund={updateFund} />
                    )}/>
               {/* route to hit the account page of that specific fund */}
	            <Route path="/account" 
                element={<Account/>} />


             </Routes>
        </main>
    );
};

export default Main;