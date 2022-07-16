import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import {HomeStackScreens} from '../../../navigation';
import {Container} from './list-item.styled';

const ListItemComponent = () => {
  const {navigate} = useNavigation();

  return (
    <Container>
      <Text onPress={() => navigate(HomeStackScreens.training)}>sdsdf</Text>
    </Container>
  );
};

export default ListItemComponent;
