import * as S from './FilterProperties.styles';
import { QuantityButton } from '../QuantityButton/index';
import { Button } from '../Button/index';

export const FilterProperties = () => {

  return (
    <S.FilterContainer>
      <Button
        type='button'
        variant='search-filters'
      >
        Filtrar busca:
      </Button>

      <S.Filter>
        <S.TwoOptionContainer>
          <S.FilterItem>
            <S.FilterTitle>Preço minímo:</S.FilterTitle>
            <input type='text' placeholder='R$' />
          </S.FilterItem>
          <S.FilterItem>
            <S.FilterTitle>Preço máximo:</S.FilterTitle>
            <input type='text' placeholder='R$' />
          </S.FilterItem>
        </S.TwoOptionContainer>

        <S.FilterItem>
          <S.FilterTitle>Localização</S.FilterTitle>
          <input
            type='text'
            placeholder='Digite uma rua, bairro ou cidade' />
        </S.FilterItem>

        <S.TwoOptionContainer>
          <S.FilterItem>
            <S.FilterTitle>Área miníma</S.FilterTitle>
            <input
              type='text'
              placeholder='m²'
            />
          </S.FilterItem>
          <S.FilterItem>
            <S.FilterTitle>Área miníma</S.FilterTitle>
            <input
              type='text'
              placeholder='m²'
            />
          </S.FilterItem>
        </S.TwoOptionContainer>

        <S.MultipleItems>
          <S.FilterTitle>Vagas de estacionamento</S.FilterTitle>
          <QuantityButton />
          <QuantityButton />
          <QuantityButton />
          <QuantityButton />
        </S.MultipleItems>

        <S.MultipleItems>
          <S.FilterTitle>Banheiros</S.FilterTitle>
          <QuantityButton />
          <QuantityButton />
          <QuantityButton />
          <QuantityButton />
        </S.MultipleItems>

        <S.MultipleItems>
          <S.FilterTitle>Dormitórios</S.FilterTitle>
          <QuantityButton />
          <QuantityButton />
          <QuantityButton />
          <QuantityButton />
        </S.MultipleItems>
        <Button type='button' variant='apply-filters' >Aplicar filtros</Button>
      </S.Filter>
    </S.FilterContainer>
  )
}