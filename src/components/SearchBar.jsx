import StyledSearchBar from "./styles/SearchBar.styled";

const SearchBar = ({handleChange, handleClick}) => {
  return (
    <StyledSearchBar>
    <input className="search-bar" type="search" placeholder="Enter Anime..." onChange={(e) => handleChange(e)}/>
    <button className="search-btn" onClick={(e) => handleClick(e)}>Search</button>
  </StyledSearchBar>
  )
};

export default SearchBar;
