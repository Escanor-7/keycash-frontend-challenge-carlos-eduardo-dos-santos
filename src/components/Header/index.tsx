import * as S from './Header.styles';
import keyPropertiesLogo from '../../assets/logo.svg';

export const Header = () => {

  return (
    <S.Container >
      <img
        src={keyPropertiesLogo}
        alt="key-properties-logo"
      />
    </S.Container>
  )
}