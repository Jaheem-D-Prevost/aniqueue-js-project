import StyledButton from './styles/Button.styled';

const Button = ({text, className, setInList, handleClick}) => {
  
  return (
    <StyledButton onClick={() => handleClick(setInList)} className={className}>{text}</StyledButton>
  )
};

export default Button;
