import { Link } from "react-router-dom";

const Landing = (props) => {
  return (
    
    <div className="landing">

      <img
        className="landing_img"
        src="https://images.unsplash.com/photo-1536195583959-e9b956d0c603?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
        alt=""
      />
      <div className="landing_phrase">
        <h3 className="phraseL">Investing made social, join the conversation.</h3>
        <Link to="/about">
          <div className="aboutLink"> {'\u2015'} About Us</div>
        </Link>
      </div>
  
    </div>
    
  );
};

export default Landing;


