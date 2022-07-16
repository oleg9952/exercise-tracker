import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import IconX from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from 'styled-components/native';
import {Container, Section, Title} from './header.styled';

const HeaderComponent = ({title}) => {
  const theme = useTheme() ?? {};

  const iconSize = theme?.typography?.iconSize?.header;

  return (
    <Container>
      <Section>
        <Icon
          name={'menu'}
          size={iconSize}
          color={theme?.palettes?.common?.black}
        />
      </Section>
      <Title>{title}</Title>
      <Section align={'flex-end'}>
        <IconX name="theme-light-dark" size={iconSize} />
      </Section>
    </Container>
  );
};

export default HeaderComponent;
