import { useParams, useNavigate } from "react-router-dom";
import PriceGraph from "../components/ShowPage/PriceGraph";
import DividendGraph from "../components/ShowPage/DividendGraph";
import HistoricalGraph from "../components/ShowPage/HistoricalGraph";
import Card from "../components/ShowPage/ChangeCard";
import FundInformation from "../components/ShowPage/FundContainer";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/Authentication/Login";
import CommentsContainer from "../components/Comments/CommentsContainer";




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
  // console.log("here are all the data for this fund", fund)
  // console.log(fund.id)

  // see if the user is authenticated first
  const { user, isAuthenticated } = useAuth0();
  const loginUserId = isAuthenticated ? user.email.split('@')[0] : 'No user login was passed';

  if (!isAuthenticated) {
      return (
          <section className='createForm'>
              <div>
                  <h1>Sign In to Access JXFunds!</h1>
                  <LoginButton className="loginButton"/>
              </div>
          </section>
      );
  } 

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
      <div className="container">
        <div className="row text-center">
          <h1 className="fundTitle">{fund.name}</h1>
        </div>
        <div className="row text-center">
          <div className="col-sm-6">
            <div className="fundContainer">
              <FundInformation fund={fund}/>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="priceGraph">
              <PriceGraph fund={fund}/>
            </div>
          </div>
        </div>
        
        <div className="row text-center">
          <div className="col-sm-6">
            <div className="dividendGraph">
              <DividendGraph fund={fund}/>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <Card fund={fund}/>
            </div>
          </div>
        </div>
        
        <div className="row text-center">
        <div className="col-12">
          <div className="HistoricalGraph">
            <HistoricalGraph fund={fund}/>
          </div>
        </div>
      </div>

      <div className="row">
          {/* we pass in the usernmae from the login information from the auth0 when the user is authenticated */}
          {/* We also pass in the comments data that we get from the backend */}
          <CommentsContainer loginUserId={loginUserId} comments={fund.comments} fundId={fund.id}/>
      </div>

        <div className="row text-center">
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


