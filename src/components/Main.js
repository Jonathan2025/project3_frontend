import { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import Create from '../pages/Create';
import Index from '../pages/Index';
import Show from '../pages/Show';
import Edit from '../pages/Edit';
import Landing from '../pages/Landing';
import About from '../pages/About';
import Account from '../pages/Account';
import Faq from '../pages/Faq';
import Blog from '../pages/Blog';
import Login from '../pages/Login';

const Main = (props) => {
    //state to hold list of funds
    const [funds, setFunds] = useState(null);
    const [users, setUsers] = useState(null);
    //url for backend
    // const URL = process.env.REACT_APP_BACKEND_URL;
    const URL = 'http://localhost:4000/jxfunds/'
    console.log(URL)
    
    const URL2 = 'http://localhost:4000/users/'
    console.log(URL2)

    const URL3 = "http://localhost:4000/users/signup"
    console.log(URL3)

    const URL4 = "http://localhost:4000/users/signin"
    console.log(URL4)

    //function to make the api call 

    const getFunds = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setFunds(data.data);
        console.log('API Call complete')
        console.log(data.data);
    }
    //function to make the call for users
    const getUsers = async () => {
        const response = await fetch(URL2);
        const data = await response.json();
        setUsers(data.data);
        console.log('Call for Users complete', data)
        console.log(data.data);
    }
    // makes a post request to create a fund
    const createFund = async (fund) => {
        //make post request to create a fund
        await fetch(URL, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(fund),
        });
        //update list of funds
        getFunds();
    };
    // makes a post request to create a user
    const createUser = async (user) => {

        //make post request to create a user
        await fetch(URL3, {
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        //update list of Users
        getUsers();
    };
    // makes a post to sign in user
    const signInUser = async (user) => {

        //make post request to create a user
        await fetch(URL4, {
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        //update list of Users
        getUsers();
    };

    //makes a request to update fund
    const updateFund = async (fund, id) => {
        await fetch(URL + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(fund),
        });
        //update list of funds
        getFunds();
    };
    //makes a request to DELETE a fund
    const deleteFund = async (id) => {
        await fetch(URL + id, {
            method: 'DELETE',
        });
        //update list of funds
        getFunds();
    };
    // Need useEffect in order to fetch the data and diplay it as soon as the component is rendered on the page
    useEffect(()=> {
        console.log("Getting funds & Users...")
        getFunds()
        getUsers()
    }, [])
    return(
        <main>
             <Routes>
                {/* route to hit the landing page of the app  */}
                <Route path='/' element={<Landing
                funds={funds}
                />} />
                {/* route to hit the landing page of the app  */}
                <Route path='/about' element={<About />} />
                {/* route to hit the FAQ pg */}
                <Route path='/faq' element={<Faq />}></Route>
                {/* route to hit index page of posted funds */}


                <Route path='/blog' element={<Blog />}></Route>
                {/* route to hit index page of posted funds */}


                <Route path='/jxfunds' element={<Index
                funds={funds}
                createFund={createFund}/>}/>
                {/* route to hit create page */}
                <Route path='/jxfunds/create' element={<Create
                funds={funds}
                createFund={createFund}/>}/>
                {/* route to hit show page of specific funds post */}
                <Route path='/jxfunds/:id' element={
                    funds && (
                    <Show
                        funds={funds}
                        updateFund={updateFund}
                        deleteFund={deleteFund}
                        />)} />
               {/* route to hit the edit page of that specific fund */}
                <Route path='/jxfunds/edit/:id'
                element={
                    funds && (
                      <Edit funds={funds} updateFund={updateFund} />
                    )}/>

               {/* route to hit the sign up page of User */}
	            <Route path="/account" 
                element={<Account
                users={users}
                createUser={createUser}
                />} />
               {/* route to hit the sign in page of User */}
	            <Route path="/login" 
                element={<Login
                users={users}
                signInUser={signInUser}
                />} />
             </Routes>
        </main>
    );
};
export default Main;