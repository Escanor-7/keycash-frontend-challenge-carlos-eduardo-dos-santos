import { useEffect, useState, useContext } from "react"
import * as S from './PropertiesList.styles';
import { usePropertyContext } from "../../context/UsePropertiesContext";
import { ImageCarousel } from "../ImageCarousel";

export type PropertiesListProps = {
  id: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  address: {
    formattedAddress: string;
  };
  parkingSpaces: number;
  usableArea: number;
  publish: boolean;
  images: [],
}

export const PropertiesList = () => {
  const { filteredProperties } = useContext(usePropertyContext);
  const [itemsPerPagination, setItemsPerPagination] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);

  // pagination logic
  const startIndex = currentPage * itemsPerPagination;
  const endIndex = startIndex + itemsPerPagination;
  const currentItems = filteredProperties.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(0);
  }, [itemsPerPagination])

  const handleConvertPrice = (value: number) => {
    return value.toLocaleString('br-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })
  }

  return (
    <S.Container>

      <S.PaginationContainer>
        <label>Itens por página</label>
        <select value={itemsPerPagination} onChange={(e) => setItemsPerPagination(Number(e.currentTarget.value))} >
          <option value={5} >5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </S.PaginationContainer>

      {currentItems.map((property: PropertiesListProps) => {
        const { id, images, price, address, bedrooms, bathrooms, usableArea, parkingSpaces } = property;
        return (
          <S.PropertiesCard key={id} >
            <ImageCarousel images={images} />

            <S.Column>
              <S.DescriptionTitle><span>Preço:</span> {handleConvertPrice(price)}</S.DescriptionTitle>
              <S.DescriptionTitle><span>Endereço:</span> {address.formattedAddress}</S.DescriptionTitle>
              <S.DescriptionTitle><span>Quartos:</span> {bedrooms}</S.DescriptionTitle>
              <S.DescriptionTitle><span>Banheiros:</span> {bathrooms}</S.DescriptionTitle>
              <S.DescriptionTitle><span>Endereço:</span> {address.formattedAddress}</S.DescriptionTitle>
              <S.DescriptionTitle><span>Área:</span> {usableArea} m²</S.DescriptionTitle>
              <S.DescriptionTitle><span>Vagas de estacionamento:</span> {parkingSpaces}</S.DescriptionTitle>
            </S.Column>
          </S.PropertiesCard>
        )
      })}
    </S.Container >
  )
}