import { Link } from "react-router-dom";
const About = () => {
    return(
        <> 
        <div className='aboutPhrase'>
            <h1> About Us </h1>
              <p> Jx-Funds is designed to empower users to learn and grow together by providing a platform for sharing insights and knowledge. We are committed to not only simplifying investing, but also fostering a community of users who can learn from each other. We believe that investing should be accessible to everyone, regardless of their background or experience, and that's why we've created an app that is intuitive, easy to use, and puts the power in the hands of the user. Join us today and become a part of a community that is dedicated to helping each other succeed.</p>
        </div>
      
         <section className="about">
             <h1> Jx-Fund Team </h1>
            
            <div className="aboutUs">
            <div className="dev">
                <img className='jonathan' src= {require('../images/jonathan.png')} alt='jonathan'/>
                <h3> Release Manager <br/> Jonathan Liang</h3>
            </div >
            <div className='dev'>
                <img className='joey' src={require('../images/joey.jpg')} alt='joey'/>
                <h3> Product Manager <br/> Joey Cheng</h3>
            </div >
            <div className='dev'>
                <img className='john' src= {require('../images/johnfrick.jpg')} alt='john'/>
                <h3> Lead Back-End Developer <br/> John Frick</h3>
            </div >
            <div className='dev'>
                <img className='joseline' src= {require('../images/joseline.jpg')} alt='joseline'/>
                <h3> Lead Front-End Developer <br/> Joseline Cedano </h3>
            </div > 
            </div>
        </section>
 <div>
        <Link to='/jxfunds/chat'>
          <button className="chatdot">Chat ☎️</button>
        </Link>
      </div>
    
       
        </>
        
    );
};
export default About;