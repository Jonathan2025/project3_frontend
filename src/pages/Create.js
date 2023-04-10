import { useState } from "react"
import { Link } from "react-router-dom"

const Create = (props) => {

        // state to hold formData
        const [newForm, setNewForm] = useState({
            name: "",
            company: "",
            symbol: "",
            description: "", 
            recommendation: "", 
            date: "",
            timezone: "",
            price: "", 
            dividends: ""
        });
      
        // handleChange function for form
        const handleChange = (event) => {
          setNewForm({ ...newForm, [event.target.name]: event.target.value });
        };
      
        // handle submit function for form
        const handleSubmit = (event) => {
          event.preventDefault();
          props.createFund(newForm);
          setNewForm({
            name: "",
            company: "",
            symbol: "",
            description: "", 
            recommendation: "", 
            date: "",
            timezone: "",
            price: "", 
            dividends: ""
          });
        };
        
        const changePage = () =>{
            window.location.href = 'http://localhost:3000/jxfunds'
        }
    // const loaded = () =>{
    //     return props.fund.map((fund) => (
    //         <div key={fund._id} className='fund'>
    //             <Link to={`/jxfunds/${fund._id}`}>
    //             <h1>{fund.name}</h1>
    //             </Link>
    //             <img src={fund.img} alt={fund.name}/>
    //             <h3>{fund.title}</h3>
    //         </div>
    //     ))
    // }
    // const loading = () =>{
    //     return <h1>Loading...</h1>
    // }

    return (
        <section className='createForm'>
            <div>
                <h1>Welcome to the Create Page!</h1>
            </div>
            <form onSubmit={handleSubmit}>
    
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.company}
          name="company"
          placeholder="Company"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.symbol}
          name="symbol"
          placeholder="Symbol"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.description}
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.recommendation}
          name="recommendation"
          placeholder="Recommendation"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.date}
          name="date"
          placeholder="Date"
          onChange={handleChange}
        />
       <br/>
        <input type="submit" value="Create Fund" onClick={changePage}/>

      </form>
        
        {/* {props.fund ? loaded(): loading()} */}
        {props.fund}
        </section>
        )
}

export default Create
