import { Link } from 'react-router-dom';
import CompanyLogo from '../components/CompanyLogo';
import Card from '../components/ShowPage/ChangeCard';

const Index = (props) => {

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
            {/* Only show the percent */}
            <Card fund={fund} showPercent={true} />
          </div>
        ))}
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading... </h1> 
  };

  return (props.funds ? loaded() : loading());
};

export default Index;
