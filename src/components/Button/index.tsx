import * as S from './Button.styles';

type ButtonProps = {
  variant?: string;
  onClick?: () => void;
  onChange?: () => void;
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({ variant, onClick, onChange, children, type }: ButtonProps) => {

  return (
    <S.Button
      className={variant}
      onClick={onClick}
      onChange={onChange}
      type={type}
    >
      {children}
    </S.Button>
  )
}