import React from 'react';
import {
  SlideWrapper,
  SlideContainer,
  Image,
  SlideOverlay,
  SlideTitle,
  SlideSubTitle,
} from './slide.styled';

const Slide = ({data: {img_url, timeOfStart, date} = {}, isLastSlide}) => (
  <SlideWrapper isLastSlide={isLastSlide}>
    <SlideContainer>
      {img_url && <Image source={{uri: img_url}} />}
      <SlideOverlay>
        <SlideTitle>{timeOfStart}</SlideTitle>
        <SlideSubTitle>{date}</SlideSubTitle>
      </SlideOverlay>
    </SlideContainer>
  </SlideWrapper>
);

export default Slide;
