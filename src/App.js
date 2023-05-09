// styling for entire app
import './App.css';

//import useEffect and usestate
import { useEffect, useState } from 'react';

//import components
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  const [funds, setFunds] = useState(null);
  const URL = process.env.REACT_APP_BACKEND_URL

  const getFunds = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setFunds(data.data);
    // console.log('API Call complete')
    // console.log("this is data from main", data);
  }
  useEffect(()=> {
    console.log('Getting the funds...')
    getFunds()
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

