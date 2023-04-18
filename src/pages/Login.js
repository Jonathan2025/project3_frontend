import { Link } from "react-router-dom";
import { useState } from "react"

const Login = (props) => {

    // state to hold formData
    const [newForm, setNewForm] = useState({
        username: "",
        password: "",
    });
    
    // handleChange function for form
    const handleChange = (event) => {
      setNewForm({ ...newForm, [event.target.name]: event.target.value});
    };
  
    // handle submit function for form
    const handleSubmit = (event) => {
      event.preventDefault();
      props.signInUser(newForm);
      setNewForm({
        username: "",
        password: "",
      });
      console.log(event, 'this is the event')
      console.log(newForm)
      console.log(props)
      console.log()
    };
    
    
    // const changePage = () =>{
    //     window.location.href = 'http://localhost:3000/jxfunds'
    // }


return (
  <>
    <section className='login'>
        <div>
            <h1>Sign In</h1>
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
    <input type="submit" value="Sign In" />

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
export default Login;