import styled, {css} from 'styled-components/native';
import {TypographyVariants} from './typography.namespace';

const H1 = css`
  font-weight: bold;
  font-size: 30px;
`;

const H2 = css`
  font-weight: bold;
  font-size: 25px;
`;

const H3 = css`
  font-weight: bold;
  font-size: 20px;
`;

const P = css`
  font-size: 14px;
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
