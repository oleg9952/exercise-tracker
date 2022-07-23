import styled from 'styled-components/native';
import {withSideInsets} from '../../styles/mixins';

export const PageContainer = styled.View`
  flex: 1;
  background-color: #ebebeb;
`;

export const Content = styled.View`
  padding-top: 10px;
  ${withSideInsets({value: 20})}
`;
