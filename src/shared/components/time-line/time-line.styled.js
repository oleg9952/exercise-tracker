import styled from 'styled-components/native';
import {Typography, TypographyVariants} from '../typography';

export const Wrapper = styled.View`
  border-left-width: 2px;
  border-color: ${({theme}) => theme?.palettes?.common?.black};
`;

export const Item = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  min-height: 70px;
  margin-bottom: ${props => (props?.isLastItem ? 0 : 20)}px;
  flex-direction: row;
  background-color: ${props => props?.theme?.palettes?.common?.white};
  elevation: 3;
`;

export const ItemSectionLeft = styled.View`
  border-right-width: 0.5px;
  border-color: ${({theme}) => theme?.palettes?.common?.grey};
  width: 27%;
  justify-content: center;
  align-items: center;
`;

export const TimeLineCircleWrapper = styled.View`
  position: absolute;
  left: 0;
  top: 50%;
  width: 10px;
  height: 20px;
  transform: translate(-2.5px, -10px);
  background-color: #${({theme}) => theme?.palettes?.common?.white};
`;

export const TimeLineCircle = styled.View`
  position: absolute;
  left: 0;
  top: 50%;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  transform: translate(-4px, -5px);
  background-color: ${({theme}) => theme?.palettes?.common?.black};
`;

export const ItemSectionRight = styled.View`
  flex: 1;
  padding-left: 15px;
  justify-content: center;
`;

export const ArrowHolder = styled.View`
  height: 100%;
  width: 30px;
  position: absolute;
  right: 0;
  justify-content: center;
  align-items: center;
`;

export const TimeText = styled(Typography).attrs({
  variant: TypographyVariants.P,
})``;

export const ItemTitleText = styled(Typography)`
  font-weight: bold;
  font-size: ${({theme}) => theme?.typography?.fontSize?.title}px;
  margin-bottom: 2px;
`;

export const ItemSubtitleText = styled(Typography)`
  font-size: ${({theme}) => theme?.typography?.fontSize?.subtitle}px;
`;
