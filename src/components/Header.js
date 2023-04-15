import { Link } from "react-router-dom";
import Search from "./Search";
const Header = (props) => {
  const { funds } = props;
  return (
    <div className="header">
      {/* this will hold our logo and nav bar */}
      <nav className="navBar">
        <Link to="/about">
          <div>About</div>
        </Link>
        <Link to="/jxfunds">
          <div>Funds</div>
        </Link>
        <Link to="/jxfunds/create">
          <div>Create</div>
        </Link>
        <Link to="/">
          <div className="logo">JxFUNDS</div>
        </Link>
        <Search funds={funds} />
        <Link to="/account">
          <div>Account</div>
        </Link>
      </nav>
    </div>
  );
};
export default Header;
