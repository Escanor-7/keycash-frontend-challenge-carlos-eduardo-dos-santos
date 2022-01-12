import * as S from './ImageCarousel.styles';
import Carousel from 'react-elastic-carousel';

type ImageCarouselProps = {
  images: [];
}

export const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const scrollCardSettings = {
    isRTL: false,
    itemsToShow: 1,
    itemsToScroll: 1,
    pagination: false,
    enableSwipe: false,

    settingCarouselBreakpoints: [
      { width: 1080, itemsToShow: 1, enableSwipe: false },
      { width: 800, itemsToShow: 1, enableSwipe: true },
      { width: 500, itemsToShow: 1 },
      { width: 360, itemsToShow: 1, enableSwipe: true }
    ]
  }

  return (
    <S.Container>
      <Carousel
        isRTL={scrollCardSettings.isRTL}
        itemsToShow={scrollCardSettings.itemsToShow}
        pagination={scrollCardSettings.pagination}
        breakPoints={scrollCardSettings.settingCarouselBreakpoints}
      >
        {images.map((image, index) => {
          return (
            <S.Img
              src={image}
              alt="property-img"
              id={String(index)}
              loading='lazy'
            />
          )
        })}
      </Carousel>
    </S.Container>
  )
}