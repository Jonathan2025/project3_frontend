import { useParams, useNavigate } from "react-router-dom";
import PriceGraph from "../components/ShowPage/PriceGraph";
import DividendGraph from "../components/ShowPage/DividendGraph";
import HistoricalGraph from "../components/ShowPage/HistoricalGraph";
import Card from "../components/ShowPage/ChangeCard";
import FundInformation from "../components/ShowPage/FundContainer";

// importing bootstrap so that we can use the grid layout for the components on the page 
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";



const Show = (props) => {
  const params = useParams();
  const navigate = useNavigate()
  const id = params.id;
  const funds = props.funds;
  const fund = funds.find((f) => f._id === id);

  console.log("this is the fund", fund)

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
      // <div className="allShowPage">
      //     <div className="fundContainer">
      //       <FundInformation fund={fund}/>
      //     </div>
      //     <div className="priceGraph">
      //       <PriceGraph fund={fund}/>
      //     </div>
      //     <div className="HistoricalGraph">
      //       <HistoricalGraph fund={fund}/>
      //     </div>
      //     <div className="dividendGraph">
      //       <DividendGraph fund={fund}/>
      //     </div>
      //    <div className="card">
      //       <Card />
      //    </div>
      //   <div className="editDltButtons">
      //     <button className='editBtn' onClick={editForm}>Edit Fund</button>
      //     <button className='deleteBtn' onClick = {removeFund}>Delete Fund</button>
      //   </div>
      // </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="fundContainer">
              <FundInformation fund={fund}/>
            </div>
          </div>
          <div className="col">
            <div className="priceGraph">
              <PriceGraph fund={fund}/>
            </div>
          </div>
          <div className="col">
            <div className="HistoricalGraph">
              <HistoricalGraph fund={fund}/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="dividendGraph">
              <DividendGraph fund={fund}/>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Card />
            </div>
          </div>
          <div className="col">
            <div className="editDltButtons">
              <button className='editBtn' onClick={editForm}>Edit Fund</button>
              <button className='deleteBtn' onClick = {removeFund}>Delete Fund</button>
            </div>
          </div>
        </div>
      </div>
      
  );
};

export default Show;
