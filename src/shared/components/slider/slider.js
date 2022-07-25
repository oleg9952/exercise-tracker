import React from 'react';
import {FlatList} from 'react-native';
import Slide from './components/slide';
import {SliderWrapper} from './slider.styled';

const Slider = ({data = []}) => (
  <SliderWrapper>
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={item => item?.activityTitle}
      renderItem={({item, index}) => (
        <Slide data={item} isLastSlide={data?.length - 1 === index} />
      )}
    />
  </SliderWrapper>
);

export default Slider;
