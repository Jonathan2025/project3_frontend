import { useState } from "react"
import { Link } from "react-router-dom"

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
    
    // const changePage = () =>{
    //     window.location.href = 'http://localhost:3000/jxfunds'
    // }


return (
    <section className='account'>
        <div>
            <h1>Sign in </h1>
        </div>
        <form onSubmit={handleSubmit}>

    <input
      type="text"
      value={newForm.name}
      name="username"
      placeholder="username"
      onChange={handleChange}
    />
    <input
      type="text"
      value={newForm.company}
      name="password"
      placeholder="password"
      onChange={handleChange}
    />
    
   <br/>
    <input type="submit" value="Create User" />

  </form>
    
    {props.fund}
    </section>
    )
}
export default Account;