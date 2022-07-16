import styled from 'styled-components/native';
import {withSideInsets} from '../../styles/mixins';
import {Typography, TypographyVariants} from '../typography';

export const Container = styled.View`
  background-color: ${({theme}) => theme?.palettes?.common?.white};
  height: 56px;
  width: 100%;
  elevation: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${withSideInsets()}
`;

export const Section = styled.View`
  max-width: 50px;
  flex-direction: row;
  justify-content: ${({align}) => align ?? 'flex-start'};
`;

export const Title = styled(Typography).attrs({
  variant: TypographyVariants.H3,
})``;
