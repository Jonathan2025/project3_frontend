import {Link} from 'react';

import { useState, useRef, useMemo } from "react";
import { useNavigate ,useParams} from "react-router-dom";
import Show from "./Show";


function Landing(props) {
  const params = useParams();
  const navigate = useNavigate()
  const id = params.id;
  const funds = props.funds;
  console.log(funds);


  console.log(props)
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);
  const inputRef = useRef();


  const filteredItems = useMemo(() => {
    return items.filter(
      (item) =>
        item.name &&
        item.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [items, query]);
  

  function onSubmit(e) {
    e.preventDefault();
    
    const filteredItems = props.funds.filter((item) => {
      return item.name && item.name.toLowerCase().includes(query.toLowerCase());
    });
  
    
    const value = inputRef.current.value;
    if (value === "") return;

  const selectedFund = filteredItems.find((item) => item.name.toLowerCase() === value.toLowerCase());
  if (selectedFund) {
    navigate(`/jxfunds/${selectedFund._id}`);
  }

  inputRef.current.value = "";
}

function handleKeyDown(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    onSubmit(e);
  }
}

    return(
      <>
        <div className='landing'>
            <h3>Investing made social, join the conversation.</h3>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="search"
            ref={inputRef}
            onKeyDown={handleKeyDown} 
          ></input>

          {filteredItems.map((item) => (
            <div key={item._id}>{item.name}</div>
          ))}

        <form onSubmit={onSubmit}>
          <button type="submit">search</button>
        </form>

      </div>
     
        </>
    );
          }

export default Landing;