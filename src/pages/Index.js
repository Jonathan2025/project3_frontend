import {Link} from 'react-router-dom';
import CompanyLogo from '../components/CompanyLogo';

const Index = (props) => {
    console.log(props.funds) // we get the data from the backend BUT its an object instead of an array 
    //loaded function
    const loaded = () => {
        return (
        <div className="containerIndex">  
        {props.funds.map((fund)=>(
            <div key={fund._id} className='fund'>
                <Link to={`/jxfunds/${fund._id}`}>
                    <h2>{fund.name}</h2>
                </Link>
                <h3>{fund.symbol}</h3>
                <CompanyLogo fund={fund}/>
            </div>
        ))}
        </div>
        )
    }
    const loading = () => {
        return <h1>Loading... </h1> 
    }
    return (props.funds ? loaded() : loading())

    

    
}

export default Index;