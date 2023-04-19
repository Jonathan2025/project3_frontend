// this file is not being used however, in the future if we want to revert back to using a form sign in we can do so

import { Link } from "react-router-dom";
import { useState } from "react"

const Account = (props) => {

    // state to hold formData
    const [newForm, setNewForm] = useState({
        username: "",
        password: "",
    });
  
    // handleChange function for form
    const handleChange = (event) => {
      setNewForm({ ...newForm, [event.target.name]: event.target.value });
    };
  
    // handle submit function for form
    const handleSubmit = (event) => {
      event.preventDefault();
      props.createUser(newForm);
      setNewForm({
        username: "",
        password: "",
      });
    };
    
    const changePage = () =>{
        window.location.href = 'http://localhost:3000/jxfunds'
    }


return (
  <>
    <section className='createForm'>
        <div>
            <h1>Sign Up</h1>
        </div>
        <form onSubmit={handleSubmit}>

    <input
      type="text"
      value={newForm.username}
      name="username"
      placeholder="username"
      onChange={handleChange}
    />
    <input
      type="text"
      value={newForm.password}
      name="password"
      placeholder="password"
      onChange={handleChange}
    />
    
   <br/>
    <input type="submit" value="Create User" onClick={changePage}/>

  </form>
    
    {props.fund}
    </section>

    <div>
    <Link to='/jxfunds/chat'>
    <button className="chatdot">Chat ☎️</button>
  </Link>
</div>;
</>

   
    )

} 
export default Account;