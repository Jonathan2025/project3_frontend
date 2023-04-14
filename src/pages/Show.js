import { useParams, useNavigate } from "react-router-dom";
import Graph from "../components/Graph";
import Chat from "../components/Chat";


const Show = (props) => {
  const params = useParams();
  const navigate = useNavigate()
  const id = params.id;
  const funds = props.funds;
  console.log(funds);
  const fund = funds.find((f) => f._id === id);

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
      <div className="fundInfo">
        <h1> {fund.name} </h1>

        <h3> Company: <br/>{fund.company}</h3>
        <h3>Symbol: <br/>{fund.symbol}</h3>
        <h3> Description: <br/>{fund.description}</h3>
        <h3> Recommendation: <br/>{fund.recommendation}</h3>
        <h3>Date: <br/>{fund.date}</h3>
        <h3>Timezone: <br/>{fund.timezone}</h3>
        <h3> Price: <br/>{fund.price}</h3>
        <h3> Dividends: <br/>{fund.dividends}</h3>
        
        <Graph fund={fund}/> 

        <Chat/>

       <button className='editBtn' onClick={editForm}>Edit</button>
      <button className='deleteBtn' onClick = {removeFund}>Delete</button>

      </div>

      <div className="comments">
        <h1 className='commentsTitle'>comments will go here</h1>
      </div>
    </>
  );
};

export default Show;
