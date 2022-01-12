import { useState } from 'react';
import * as S from './FilterProperties.styles';
import { QuantityButton } from '../QuantityButton/index';
import { Button } from '../Button/index';

export const FilterProperties = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <S.FilterContainer>
      <Button
        type='button'
        variant='search-filters'
        onClick={() => setShowFilters(!showFilters)}
      >
        Filtrar busca:
      </Button>
      {showFilters ? (
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
            <QuantityButton quantity={1} />
            <QuantityButton quantity={2} />
            <QuantityButton quantity={3} />
            <QuantityButton quantity={4} />
          </S.MultipleItems>

          <S.MultipleItems>
            <S.FilterTitle>Banheiros</S.FilterTitle>
            <QuantityButton quantity={1} />
            <QuantityButton quantity={2} />
            <QuantityButton quantity={3} />
            <QuantityButton quantity={4} />
          </S.MultipleItems>

          <S.MultipleItems>
            <S.FilterTitle>Dormitórios</S.FilterTitle>
            <QuantityButton quantity={1} />
            <QuantityButton quantity={2} />
            <QuantityButton quantity={3} />
            <QuantityButton quantity={4} />
          </S.MultipleItems>
          <Button type='button' variant='apply-filters' >Aplicar filtros</Button>
        </S.Filter>
      ) : null}
    </S.FilterContainer>
  )
}