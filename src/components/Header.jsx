import StyledHeader from './styles/Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <h1 className="logo-text">AniQueue</h1>

      <i className="fa-regular fa-circle-user avatar-icon"></i>
    </StyledHeader>
  )
};

export default Header;
