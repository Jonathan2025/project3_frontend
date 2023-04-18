// styling for entire app
import './App.css';

//import useEffect and usestate
import { useEffect, useState } from 'react';
import axios from 'axios'

//import components
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  const [funds, setFunds] = useState(null);
  const [loginStatus, setLoginStatus] = useState("")

  axios.defaults.withCredentials = true; 

  const URL = 'http://localhost:4000/jxfunds/'

  const getFunds = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setFunds(data.data);
    console.log('API Call complete')
    console.log(data.data);
  }
  useEffect(()=> {
    console.log('Getting funds...')
    getFunds()
    axios.get('http://localhost:4000/users/signin').then((response) => {
      console.log(response)
    })
  }, [])
  return (
    <div className='jx-funds'>
      <Header funds={funds} />
      <Main/>
      <Footer />
    </div>
  );
};
export default App;

