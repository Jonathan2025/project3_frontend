import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="header">

      {/* this will hold our logo and nav bar */}
     
      <nav className="navBar">

        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/about">
            <div>About</div>
        </Link>
        <Link to="/search">
          <div>Search</div>
        </Link>
        <Link to="/" className='logo'>
          <div className='logo'>JxFUNDS</div>
        </Link>
        <Link to="/jxfunds">
          <div>Funds</div>
        </Link>
        <Link to="/jxfunds/create">
          <div>Create</div>
        </Link>
        <Link to="/account">
          <div>Account</div>
        </Link>
      </nav>

    </div>
  );
};

export default Header;
