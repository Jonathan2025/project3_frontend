const Footer = (props) => {
  return (
    <>
      <div className="footer">
        <div className="socials"> 
          <a href="https://twitter.com/PassivefundsIn"><img className='twitter' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABBZ8p9SYIZ42RZH29oUr-EsJ66qcowmVgm1vL3_YzuYoV5JOfwpPmqxsPE58qeHl-ZU&usqp=CAU' alt ='twitter'/></a>
          <a  href="https://www.youtube.com/watch?v=3rFjS2yNjqc"><img className='youtube' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo79kyE9S8HdL8Kw8Yuy3KZJHnYGrFE3SBcQ&usqp=CAU' alt='youtube'/></a>
           <a  href="http://localhost:3000/about"><img className='contacts' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeRJgCii7XmtgDqTliN-6mv4xDDm7co8uXHg&usqp=CAU" alt='contacts'/></a>
           
         
        </div>
          <h5 className="footerTag">@Jx-FUNDS</h5>
      </div>
    </>
  );
};

export default Footer;
