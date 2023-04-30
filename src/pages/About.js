const About = () => {
    
    return(
        <> 
        <section className=" allAbout container-fluid">
            <div className="imgA">
          <img  className='aboutImg' src="https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHRlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="team"/>
          </div>
          <div className='aboutPhrase'>
            <h1 className="aboutT" > Our Vision </h1>
            <hr className="aboutLine"/>
              <p className="aboutParagraph"> Jx-Funds is designed to empower users to learn and grow together by providing a platform for sharing insights and knowledge. We are committed to not only simplifying investing, but also fostering a community of users who can learn from each other. We believe that investing should be accessible to everyone, regardless of their background or experience, and that's why we've created an app that is intuitive, easy to use, and puts the power in the hands of the user. Join us today and become a part of a community that is dedicated to helping each other succeed.</p>
        </div> 
       </section>
         <section className="about">
             <h1 className="aboutT"> Meet the Jx Fund Team </h1>
            <hr className="aboutLine"/>
            <div className="aboutUs">
            <div className="dev">
                <a href="https://www.linkedin.com/in/jonathan-liang7/"><img className='jonathan' src= {require('../images/jonathan.png')} alt='jonathan'/></a>
                <h3 className="title-name"> Release Manager <br/> Jonathan Liang</h3>
            </div >
            <div className='dev'>
               <a href="https://www.linkedin.com/in/joey-cheng-/"><img className='joey' src={require('../images/joey.jpg')} alt='joey'/></a>
                <h3 className="title-name"> Product Manager <br/> Joey Cheng</h3>
            </div >
            <div className='dev'>
               <a href="https://www.linkedin.com/in/john-r-frick/"><img className='john' src= {require('../images/johnfrick.jpg')} alt='john'/></a>
                <h3 className="title-name"> Lead Back-End Developer <br/> John Frick</h3>
            </div >
            <div className='dev'>
                <a href="https://www.linkedin.com/in/joseline-cedano/"><img className='joseline' src= {require('../images/joseline.jpg')} alt='joseline'/></a>
                <h3 className="title-name"> Lead Front-End Developer <br/> Joseline Cedano </h3>
            </div > 
            </div>
        </section>
            
        </>
        
    );
};
export default About;