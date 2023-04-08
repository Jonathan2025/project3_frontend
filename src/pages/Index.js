import {useState} from 'react';
import {Link} from 'react-router-dom';

const Index = (props) => {
    console.log(props.funds) // we get the data from the backend BUT its an object instead of an array 
    //loaded function
    const loaded = () => {
        return props.funds.data.map((fund)=>(
            <div key={fund._id} className='fund'>
                <Link to={`/jxfunds/${fund._id}`}>
                    <h1>{fund.name}({fund.symbol})</h1>
                </Link>
            </div>
        ));
    };
    const loading = () => {
        return <h1>Loading... </h1> 
    };
    return (props.funds ? loaded() : loading());
};

export default Index;