import { Link } from "react-router-dom";
import Search from "./Search";
import LogoutButton from "./Authentication/Logout";
import LoginButton from "./Authentication/Login";
import { useAuth0 } from "@auth0/auth0-react";

const Header = (props) => {
  const { funds } = props;

  // we are going to add the user that was logged in through auth0
  const {user, isAuthenticated } = useAuth0()



  return (
    <div className="header sticky-top">
      {/* this will hold our logo and nav bar */}
      <nav className="navBar ">
        <Link to="/about">
          <div>Our Vision</div>
        </Link>
        <Link to='/blog'>
          <div>Publications</div>
        </Link>
        <Link to="/jxfunds">
          <div>Funds</div>
        </Link>
        <Link to='/' className='logo'>
          <div className='logo'>JxFUNDS</div>
        </Link>
        <div className="searchbar">
        <Search funds={funds} />
        </div>
        <Link to="/jxfunds/create">
          <div> New Jx-Fund</div>
        </Link>
        <div className="dropDown">
           <button className="dropBtn">Account <span className="unicodeArrow">{`\u25BC`}</span></button>
           
           
           {/* <div className="dropLinks">
            <LoginButton />
            <LogoutButton/>
           </div> */}
           <div className="dropLinks">
            {isAuthenticated ? (
              <div className="user-email">{user.email.split('@')[0]}</div>
            ) : (
              <LoginButton />
            )}
            {isAuthenticated && <LogoutButton />}
          </div>





        </div>
     
      </nav>
    </div>
  );
};
export default Header;
