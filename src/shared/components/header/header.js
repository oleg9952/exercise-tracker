import {Text} from 'react-native';
import React from 'react';
import {Container} from './header.styled';
import {Padding} from '../layout/padding';

const HeaderComponent = () => {
  return (
    <Container>
      <Padding>
        <Text>Hello World</Text>
      </Padding>
    </Container>
  );
};

export default HeaderComponent;
