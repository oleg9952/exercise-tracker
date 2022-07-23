import styled from 'styled-components/native';
import {Typography, TypographyVariants} from '../typography';

export const SectionWrapper = styled.View`
  margin-bottom: 15px;
`;

export const SectionTitle = styled(Typography).attrs({
  variant: TypographyVariants.H3,
})`
  margin-bottom: 10px;
`;

export const SectionContent = styled.View``;
