import styled from 'styled-components';

const StyledSearchBar = styled.div`
  
  display: flex;
  column-gap: 1em;
  margin-top: 1em;
  font-size: 1.6rem;
  min-width: max-content;
  margin-bottom: 1em;
  padding: 0.375em 1.35em;

  .search-bar, .search-btn {
    border: 1px solid var(--dark-blue);
  }

  .search-bar {
    border-radius: 8px;
    width: 80%;
    padding: 0.25em; 
  }

  .search-btn { 
    font-weight: 700;
    color: #FFFFFF;
    background-color: var(--dark-blue);
    padding: 0.5em 1em;
    border-radius: 8px;
    cursor: pointer;
  }

  .search-btn:hover, .search-btn:active {
    color: var(--dark-blue);
    background-color: #FFFFFF;
  }

  @media screen and (min-width: 534px) and (max-width: 1200px) {

    & {
      justify-content: center;
    }

    .search-bar {
      border-radius: 8px;
      max-width: 65%;
      padding: 0.25em; 
    }
  }

  @media screen and (min-width: 1024px) {
    & {
      align-self: start;
      padding: 0;
    }

    .search-bar { 
      width: auto; 
    }
  
  }
`;

export default StyledSearchBar;
