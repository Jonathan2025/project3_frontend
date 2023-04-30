import { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import Create from '../pages/Create';
import Index from '../pages/Index';
import Show from '../pages/Show';
import Edit from '../pages/Edit';
import Landing from '../pages/Landing';
import About from '../pages/About';
import Faq from '../pages/Faq';
import Blog from '../pages/Blog';
import Profile from './Chat/ChatProfile';
import withAuth from './Authentication/Authenticated';

// lets add authentication for the profile routes
// the other routes will already have the user authentication function in the component
// or there will be no authentication needed at all
const AuthProfile = withAuth(Profile)

const Main = (props) => {
    //state to hold list of funds
    const [funds, setFunds] = useState(null);
    //url for the backend
    const URL = process.env.REACT_APP_BACKEND_URL

    //function to make the api call 
    const getFunds = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setFunds(data.data);
        console.log('API Call complete')
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
        getFunds()
    }, [])

    return(
        <main>
             <Routes>
                {/* Here are the routes to hit the specific pages in the application, in which the user will need to be authenticated to access some of them */}
                <Route path='/' element={<Landing />} />
                <Route path='/about' element={<About />} />
                <Route path='/faq' element={<Faq />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/jxfunds' element={funds && <Index funds={funds} createFund={createFund} />}/>
                <Route path='/jxfunds/create' element={<Create funds={funds} createFund={createFund}/>}/>
                <Route path='/jxfunds/:id' element={funds && (<Show funds={funds} updateFund={updateFund} deleteFund={deleteFund} />)} />
                <Route path='/jxfunds/edit/:id'element={funds && ( <Edit funds={funds} updateFund={updateFund} />)}/>
                <Route path='/jxfunds/chat' element={<AuthProfile><Profile /></AuthProfile>} />
             </Routes>
        </main>
    );
};
export default Main;