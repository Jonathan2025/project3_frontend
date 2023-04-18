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
import Chat from './Chat';
import withAuth from './Authentication/Authenticated';


// lets add authentication for most of the routes 
const AuthCreate = withAuth(Create)
const AuthIndex = withAuth(Index)
const AuthShow = withAuth(Show)
const AuthEdit = withAuth(Edit)
const AuthAbout = withAuth(About)
const AuthFaq = withAuth(Faq)
const AuthBlog = withAuth(Blog)
const AuthChat = withAuth(Chat)

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
        // console.log("Getting funds & Users...")
        getFunds()
        getUsers()
    }, [])

    console.log("these are the funds being got", funds)

    return(
        <main>
             <Routes>
                {/* Here are the routes to hit the specific pages in the application, in which the user will need to be authenticated to access some of them */}
                <Route path='/' element={<Landing />} />
                {/* route to hit the landing page of the app  */}
                <Route path='/about' element={<AuthAbout><About /></AuthAbout>} />

                <Route path='/faq' element={<AuthFaq><Faq /></AuthFaq>} />

                <Route path='/blog' element={<AuthBlog><Blog /></AuthBlog>} />
                
                <Route path='/jxfunds' element={funds && <Index funds={funds} createFund={createFund} />}/>
                {/* <Route path='/jxfunds' element={funds ? <AuthIndex><Index funds={funds} createFund={createFund} /></AuthIndex> : null} /> */}
                {/* <Route
                    path='/jxfunds'
                    element={<AuthIndex>{funds && <Index createFund={createFund} {...props} />}</AuthIndex>}
                    /> */}
                
                <Route path='/jxfunds/create' element={<AuthCreate><Create funds={funds} createFund={createFund} /></AuthCreate>} />

                <Route path='/jxfunds/:id' element={<AuthShow>{funds && <Show funds={funds} updateFund={updateFund} deleteFund={deleteFund} />}</AuthShow>} />

                <Route path='/jxfunds/edit/:id' element={<AuthEdit>{funds && <Edit funds={funds} updateFund={updateFund} />}</AuthEdit>} />

                <Route path='/jxfunds/chat' element={<AuthChat><Chat /></AuthChat>} />

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