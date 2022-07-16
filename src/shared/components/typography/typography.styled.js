import styled, {css} from 'styled-components/native';
import {TypographyVariants} from './typography.namespace';

const H1 = css`
  font-weight: bold;
  font-size: ${({theme: {typography}}) => typography?.fontSize?.h1}px;
`;

const H2 = css`
  font-weight: bold;
  font-size: ${({theme: {typography}}) => typography?.fontSize?.h2}px;
`;

const H3 = css`
  font-weight: bold;
  font-size: ${({theme: {typography}}) => typography?.fontSize?.h3}px;
`;

const P = css`
  font-size: ${({theme: {typography}}) => typography?.fontSize?.p}px;
`;

const I = css`
  font-style: italic;
  ${P}
`;

const B = css`
  font-weight: bold;
  ${P}
`;

const TypographyMap = {
  [TypographyVariants.H1]: H1,
  [TypographyVariants.H2]: H2,
  [TypographyVariants.H3]: H3,
  [TypographyVariants.P]: P,
  [TypographyVariants.I]: I,
  [TypographyVariants.B]: B,
};

export const Text = styled.Text`
  color: ${({color}) => color};
  ${({variant}) => TypographyMap[variant]}
  ${({size}) => size && `font-size: ${size}px`}
`;
