import * as S from './QuantityButton.styles';

type QuantityButtonProps = {
  quantity: number;
}

export const QuantityButton = ({ quantity }: QuantityButtonProps) => {

  return (
    <S.Container>
      <S.QuantityButton type='radio' />
      <span>{quantity}+</span>
    </S.Container>
  )
}