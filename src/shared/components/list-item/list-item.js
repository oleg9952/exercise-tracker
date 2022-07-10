import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import {StackRoutes} from '../../../navigation';
import {Container} from './list-item.styled';

const ListItemComponent = () => {
  const {navigate} = useNavigation();

  return (
    <Container>
      <Text onPress={() => navigate(StackRoutes.training)}>sdsdf</Text>
    </Container>
  );
};

export default ListItemComponent;
