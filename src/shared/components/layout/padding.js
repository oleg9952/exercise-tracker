import styled from 'styled-components/native';

export const Padding = styled.View`
  padding-horizontal: ${({horizontal}) => horizontal ?? 10}px;
  padding-vertical: ${({vertical}) => vertical ?? 0}px;
`;
