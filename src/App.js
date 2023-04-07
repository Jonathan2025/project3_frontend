// styling for entire app
import './App.css';

//import Router
import { Routes, Route } from 'react-router';

//import components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="jx-funds">
      <h1> JX-FUNDS </h1>
      <Header />
      <Footer />
    </div>
  );
};

export default App;
