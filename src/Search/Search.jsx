import './search.css';

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
      <button type="button" aria-label="Search" className="search__button" onClick={() => search()} />

    </div>
  );
}

export default Search;
