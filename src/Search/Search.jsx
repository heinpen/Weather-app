import "./search.css";

function Search(props) {
  const { search, setQuery } = props;
  return (
    <div className="search">
      <input
        type="text"
        className="search__bar"
        placeholder="Type city..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search__button" onClick={() => search()}></button>
    </div>
  );
}

export default Search;
