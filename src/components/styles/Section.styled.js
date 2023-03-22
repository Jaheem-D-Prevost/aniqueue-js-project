import styled from 'styled-components';

const StyledSection = styled.section`

  .fa-spinner {
    font-size: 6rem;
    position: absolute;
    top: 50%;
    transform: translateX(-50%);
    will-change: transform;
  }
  
  .tabs {
    width: 100%;
  }

  .list {
    display: grid;
    grid-template-rows: minmax(0, auto); 
    justify-content: center;
    justify-items: center;
    align-items: baseline;
    row-gap: 2em;
    font-size: 1.2rem; 
    padding: 0.5em 2em;
  }

  @media screen and (min-width: 1024px) {
    & {
      display: grid;
      grid-template-areas:
        'con con'
        'al al';
      grid-template-rows: repeat(2, minmax(0, auto));
    }

    .controls {
      display: flex;
      grid-area: con;
      justify-content: space-between;
      align-self: center;
      padding: 0.75em 2.4em;
    }

    .search-bar {
      padding: 0;
      order: 0;
    }

    .tabs {
      order: 1;
      width: auto;
    }
  
    .list {
      grid-area: al;
      grid-template-columns: repeat(3, 1fr);
      justify-content: normal;
      justify-items: center;
      align-items: normal;
      gap: 2em;
    }

    .center {
      justify-content: center;
    }
  }
`;

export default StyledSection;
