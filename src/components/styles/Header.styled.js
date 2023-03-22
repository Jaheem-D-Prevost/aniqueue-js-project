import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1.5em;
  color: #FFFFFF;
  background-color: var(--light-purple);

  h1 {
    font-family: 'Mukta', serif;
    font-size: 3rem;
    font-weight: 500;
  }

  i {
    font-size: 3.2rem;
  }
`;

export default StyledHeader;
