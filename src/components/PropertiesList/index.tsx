import { useEffect, useState } from "react"
import axios from 'axios';
import * as S from './PropertiesList.styles';
import Carousel from 'react-elastic-carousel';

export const PropertiesList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const getProperties = async () => {
      await axios.get('http://5e148887bce1d10014baea80.mockapi.io/keycash/challenge', {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((res) => setProperties(res.data))
        .catch((err) => console.log('Erro na req', err))
    }
    getProperties();
  })

  const scrollCardSettings = {
    isRTL: false,
    itemsToShow: 4,
    itemsToScroll: 1,
    pagination: false,

    settingCarouselBreakpoints: [
      { width: 360, itemsToShow: 1, enableSwipe: true },
      { width: 500, itemsToShow: 2 },
      { width: 800, itemsToShow: 3 },
      { width: 1080, itemsToShow: 4, enableSwipe: false }
    ]
  }

  return (
    <S.Container>
      {/* <Carousel
        isRTL={scrollCardSettings.isRTL}
        itemsToShow={scrollCardSettings.itemsToShow}
        pagination={scrollCardSettings.pagination}
        breakPoints={scrollCardSettings.settingCarouselBreakpoints}
      > */}
      {properties.map((property: any) => {
        return (
          <S.PropertiesCard key={property.id} >
            {/* <S.AlignCenter> */}
              <img
                src={property.images[0]}
                alt="property-img"
              />
            {/* </S.AlignCenter> */}
            <S.Column>
              <S.DescriptionTitle><span>Preço:</span> {property.price}</S.DescriptionTitle>
              <S.DescriptionTitle><span>Endereço:</span> {property.address.formattedAddress}</S.DescriptionTitle>
              <S.DescriptionTitle><span>Quartos:</span> {property.bedrooms}</S.DescriptionTitle>
              <S.DescriptionTitle><span>Banheiros:</span> {property.bathrooms}</S.DescriptionTitle>
              <S.DescriptionTitle><span>Endereço:</span> {property.address.formattedAddress}</S.DescriptionTitle>
              <S.DescriptionTitle><span>Área:</span> {property.usableArea} m2</S.DescriptionTitle>
              <S.DescriptionTitle><span>Vagas de estacionamento:</span> {property.parkingSpaces}</S.DescriptionTitle>
            </S.Column>
          </S.PropertiesCard>
        )
      })}
      {/* </Carousel> */}
    </S.Container >
  )
}