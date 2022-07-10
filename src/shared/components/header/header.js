import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import IconX from 'react-native-vector-icons/MaterialCommunityIcons';
import {Container, Section, Title} from './header.styled';

const HeaderComponent = ({title}) => {
  return (
    <Container>
      <Section>
        <Icon name={'menu'} size={35} color={'#000'} />
      </Section>
      <Title>{title}</Title>
      <Section align={'flex-end'}>
        <IconX name="theme-light-dark" size={35} />
      </Section>
    </Container>
  );
};

export default HeaderComponent;
