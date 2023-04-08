// styling for entire app
import './App.css';

//import Router
import { Routes, Route } from 'react-router';

//import components
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

//import pages
import Landing from './pages/Landing';

function App() {
  return (
    <div className="jx-funds">
      <Header />

      <Main />
       {/* I think we can get rid of the routes tags and everything inside */}
      {/* <Routes>
         <Route path='/' element={<Landing />} />
      </Routes> */}




      <Footer />
    </div>
  );
};

export default App;
