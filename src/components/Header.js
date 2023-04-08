import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="header">

      {/* this will hold our logo and nav bar */}
     
      <nav className="navBar">
       <h1 className='logo'> JXFUNDS</h1>
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/jxfunds">
          <div>Funds</div>
        </Link>
        <Link to="/jxfunds/create">
          <div>Create</div>
        </Link>
      </nav>
      <hr/>
    </div>
  );
};

export default Header;
