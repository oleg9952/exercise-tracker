import styled from 'styled-components/native';

export const PageContainer = styled.View`
  flex: 1;
  background-color: #ebebeb;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
})``;
