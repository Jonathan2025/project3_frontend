import { Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../components/Authentication/Login';
const About = () => {
    const { isAuthenticated } = useAuth0();

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



    return(
        <> 
        <div className='aboutPhrase'>
        <img
        className="landing_img"
        src="https://images.unsplash.com/photo-1536195583959-e9b956d0c603?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
        alt=""
        />
        <div className="about-us-text">
            <h1> About Us </h1>
              <p> Jx-Funds is designed to empower users to learn and grow together by providing a platform for sharing insights and knowledge. We are committed to not only simplifying investing, but also fostering a community of users who can learn from each other. We believe that investing should be accessible to everyone, regardless of their background or experience, and that's why we've created an app that is intuitive, easy to use, and puts the power in the hands of the user. Join us today and become a part of a community that is dedicated to helping each other succeed.</p>
        </div>
        </div>
        
         <section className="about">
             <h1> Jx-Fund Team </h1>
            
            <div className="aboutUs">
            <div className="dev">
                <img className='jonathan' src= {require('../images/jonathan.png')} alt='jonathan'/>
                <h3 className="title-name"> Release Manager <br/> Jonathan Liang</h3>
            </div >
            <div className='dev'>
                <img className='joey' src={require('../images/joey.jpg')} alt='joey'/>
                <h3 className="title-name"> Product Manager <br/> Joey Cheng</h3>
            </div >
            <div className='dev'>
                <img className='john' src= {require('../images/johnfrick.jpg')} alt='john'/>
                <h3 className="title-name"> Lead Back-End Developer <br/> John Frick</h3>
            </div >
            <div className='dev'>
                <img className='joseline' src= {require('../images/joseline.jpg')} alt='joseline'/>
                <h3 className="title-name"> Lead Front-End Developer <br/> Joseline Cedano </h3>
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