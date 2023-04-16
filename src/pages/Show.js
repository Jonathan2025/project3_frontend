import { useParams, useNavigate } from "react-router-dom";
import PriceGraph from "../components/graphs/PriceGraph";
import DividendGraph from "../components/graphs/DividendGraph";
import HistoricalGraph from "../components/graphs/HistoricalGraph";
import Card from "../components/graphs/ChangeCard";

const Show = (props) => {
  const params = useParams();
  const navigate = useNavigate()
  const id = params.id;
  const funds = props.funds;
  const fund = funds.find((f) => f._id === id);

  console.log("this is the fund", fund)

  const dateAdded = new Date(fund.date.slice(0, 10));
  const formattedDate = dateAdded.toLocaleDateString();
  const [month, day, year] = formattedDate.split('/');
  const reversedDate = `${month}/${day}/${year}`

  //linking edit btn to edit route
  const editForm = (e) => {
    navigate(`/jxfunds/edit/${fund._id}`)
  }

  //handling for delete
  const removeFund = (e) => {
    e.preventDefault()
    props.deleteFund(fund._id);
    navigate("/jxfunds");
  }

  return (
    <>
      <div className="showFundContainer">
        <h1> {fund.name} </h1>
          <div className="fundInfo">
            <h3> Company: <br/>{fund.company}</h3>
            <h3> Symbol: <br/>{fund.symbol}</h3>
            <h3> Description: <br/>{fund.description}</h3>
            <h3> Recommendation: <br/>{fund.recommendation}</h3>
            <h3> Date Added: <br/>{reversedDate}</h3>
          </div>

          <div className="graph">
            <PriceGraph fund={fund}/>
          </div>

          <div className="dividendGraph">
            <DividendGraph fund={fund}/>
          </div>

          <div className="HistoricalGraph">
            <HistoricalGraph fund={fund}/>
          </div>
         <div className="card">
            <Card />
         </div>



        <div className="editDltButtons">
          <button className='editBtn' onClick={editForm}>Edit Fund</button>
          <button className='deleteBtn' onClick = {removeFund}>Delete Fund</button>
        </div>
      </div>
    </>
  );
};

export default Show;
