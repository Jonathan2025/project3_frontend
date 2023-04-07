import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="header">
      {/* <h1>This is the Header component!</h1>  */}
      {/* this will hold our logo and nav bar */}
      <nav className="navBar">
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/jxfunds">
          <div>Funds</div>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
