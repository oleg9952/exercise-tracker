import React from 'react';
import {Text, View} from 'react-native';
import {
  Item,
  ItemSectionLeft,
  ItemSectionRight,
  Wrapper,
  TimeLineCircleWrapper,
  TimeLineCircle,
  ArrowHolder,
  TimeText,
  ItemTitleText,
  ItemSubtitleText,
} from './time-line.styled';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useTheme} from 'styled-components/native';

const TimeLine = ({data, onPress}) => {
  const theme = useTheme();
  return (
    <Wrapper>
      {data?.map((item, index) => (
        <Item
          key={item?.title}
          isLastItem={data?.length === index + 1}
          onPress={onPress}>
          <ItemSectionLeft>
            <TimeLineCircleWrapper>
              <TimeLineCircle />
            </TimeLineCircleWrapper>
            <TimeText>{item?.time}</TimeText>
          </ItemSectionLeft>
          <ItemSectionRight>
            <ItemTitleText>{item?.title}</ItemTitleText>
            <ItemSubtitleText>Attempts: {item?.attempts}</ItemSubtitleText>
            <ArrowHolder>
              <Icon
                name="angle-right"
                size={theme?.typography?.iconSize?.timeLineArrow}
                color={theme?.palettes?.common?.grey}
              />
            </ArrowHolder>
          </ItemSectionRight>
        </Item>
      ))}
    </Wrapper>
  );
};

export default TimeLine;
