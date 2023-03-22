import styled from 'styled-components';

const Item = styled.div`
  display: flex;  
  column-gap: 1em; 
   
  img {
    max-width: 112.5px;
    height: 160.5px;
    object-fit: cover;
  }
  
  .anime-header {
    display: flex;
    justify-content: space-between;   
    align-items: center;
  }

  .title {
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1;
  }
    
  .anime-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media screen and (min-width: 534px) and (max-width: 1200px) {
   
    img {
      max-width: 321px;
      height: 240px;
    }

    .title {
      font-size: 2.4rem; 
    }

    p {
      font-size: 1.7rem;
    } 

    .synopsis {
      width: 480px;
    }

  }

  @media screen and (min-width: 1024px) {
    img {
      width: 100%;
      max-width: 112.5px;
      height: 160.5px;
    }

    .title {
      font-size: 1.8rem; 
    }

    p {
      font-size: 1.4rem;
    } 

    .synopsis {
      width: auto;
    }
  }
`;

export default Item;
