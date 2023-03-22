import styled from 'styled-components';

const StyledButton = styled.button`

  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  border: none;
  border-radius: 4px;
  font-size: 1.4rem;
  font-weight: bold;
  padding: 0.25em 1em; 
  cursor: pointer;
  text-align: center; 
  
  &.add-btn {
    background-color: var(--yellow);
  }

  &.add-btn:hover, .add-btn:focus {
    background-color: #EAE07B;
  }

  &.remove-btn {
    background-color: var(--light-red);
  }

  &.remove-btn:hover, .remove-btn:focus {
    background-color: #F37D72;
  }

  @media screen and (min-width: 834px) {
    & { 
      border-radius: 4px;
      font-size: 2rem; 
    } 
  }

  @media screen and (min-width: 1024px) {
    & {  
      font-size: 1.4rem; 
    } 
  }
`;

export default StyledButton;
