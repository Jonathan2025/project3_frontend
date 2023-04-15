import { useState, useRef, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const Search = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;
  const funds = props.funds;
  console.log('props are ', props)
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);
  const inputRef = useRef();
  const filteredItems = useMemo(() => {
    return items.filter(
      (item) =>
        item.symbol && item.symbol.toLowerCase().includes(query.toLowerCase())
    );
  }, [items, query]);
  function onSubmit(e) {
    e.preventDefault();
    const filteredItems = props.funds.filter((item) => {
      return item.symbol && item.symbol.toLowerCase().includes(query.toLowerCase());
    });
    const value = inputRef.current.value;
    if (value === '') return;
    const selectedFund = filteredItems.find(
      (item) => item.symbol.toLowerCase() === value.toLowerCase()
    );
    if (selectedFund) {
      navigate(`/jxfunds/${selectedFund._id}`);
    }
    inputRef.current.value = '';
  }
  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSubmit(e);
    }
  }
  return (
    <>
    <div className='searchBar'>
        <form onSubmit={onSubmit}>
        <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type='search'
        placeholder='Search Symbol ...'
        ref={inputRef}
        onKeyDown={handleKeyDown}
      />
        <input className='submitBtn'
        type='submit'
        value={'\u2315'}
      />
    </form>
      {filteredItems.map((item) => (
        <div key={item._id}>{item.name}</div>
      ))}
      </div>
    </>
  );
};
export default Search;