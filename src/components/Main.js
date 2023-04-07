import { useEffect, useState } from "react";
import {Routes, Route} from 'react-router-dom';
import Index from "../pages/Index";
import Show from "../pages/Show";

const Main = (props) => {
    return(
        <div className='main'>
            <h1> This is the Main component!</h1>
             {/* this will store all of our funds at some point and once clicked will send user to funds show page with comments*/}
        </div>
    );
};

export default Main;