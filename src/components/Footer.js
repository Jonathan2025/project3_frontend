import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <>
      <div className="footer">
        <div className="socials">
          <a href="https://twitter.com/PassivefundsIn">
            <img
              className="twitter"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABBZ8p9SYIZ42RZH29oUr-EsJ66qcowmVgm1vL3_YzuYoV5JOfwpPmqxsPE58qeHl-ZU&usqp=CAU"
              alt="twitter"
            />
          </a>
          <a href="https://www.youtube.com/watch?v=3rFjS2yNjqc">
            <img
              className="youtube"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo79kyE9S8HdL8Kw8Yuy3KZJHnYGrFE3SBcQ&usqp=CAU"
              alt="youtube"
            />
          </a>
          <Link to = '/about'>
            <img
              className="contacts"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeRJgCii7XmtgDqTliN-6mv4xDDm7co8uXHg&usqp=CAU"
              alt="contacts"
            />
          </Link>
          <Link to= '/faq'>
          <img
              className="faq"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkYsKlObc1Ewsk3XUcKPSshiS4uwYHZpG8GQ&usqp=CAU"
              alt="faq"
            />
          </Link>
          <Link to='/jxfunds/chat'>
         <img className='chatIcon'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9L6Q5rWwQGNk6sG2EC6jnKerEUIgnLgFTnA&usqp=CAU' alt=""/>
        </Link>
        </div>
        <h5 className="footerTag">@Jx-FUNDS</h5>
      </div>
    </>
  );
};

export default Footer;
