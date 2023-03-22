import styled from 'styled-components';

const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 2rem;
  padding: 0.5em 0;
  width: 100%;
  justify-self: auto; 

  p { 
    text-align: center;
    width: 50%;
    cursor: pointer;
  }

  .active {
    border-bottom: 2px solid var(--light-purple);
  }

  @media screen and (min-width: 1024px) {
    & {
      justify-content: normal;
      align-items: center;
      column-gap: 1em;
    }

    p { 
      text-align: start;
      width: auto;
      cursor: pointer;
      font-weight: 700;
    }
  
    .active {
      color: var(--light-purple);
      border: none;
    }
`;

export default Tabs;
