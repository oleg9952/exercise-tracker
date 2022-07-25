import {Dimensions} from 'react-native';
import {Typography, TypographyVariants} from '../../typography';
import styled, {css} from 'styled-components/native';

const screenWidth = Dimensions.get('screen').width;

const WIDTH = (screenWidth - 40) / 2 - 10;

export const SlideWrapper = styled.View`
  width: ${WIDTH}px;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  margin-right: ${props => (props?.isLastSlide ? 20 : 0)}px;
  overflow: hidden;
`;

export const SlideContainer = styled.View`
  height: 110px;
  width: ${WIDTH}px;
  background-color: ${({theme: {palettes}}) => palettes?.common?.white};
  margin-top: 3px;
  margin-bottom: 3px;
  elevation: 3;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: ${WIDTH}px;
  height: 100%;
`;

export const SlideOverlay = styled.View`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
  align-items: center;
  justify-content: center;
`;

export const SlideTitle = styled(Typography).attrs({
  variant: TypographyVariants.H3,
})(
  ({theme: {palettes}}) => css`
    color: ${palettes?.common?.white};
  `,
);

export const SlideSubTitle = styled(Typography).attrs({
  variant: TypographyVariants.P,
})(
  ({theme: {palettes}}) => css`
    color: ${palettes?.common?.white};
  `,
);
