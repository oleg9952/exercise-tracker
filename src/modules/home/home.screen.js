import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Header} from '../../shared/components/header';

const HomeScreenComponent = () => {
  return (
    <View>
      <Header />
      <Text>home.screen</Text>
    </View>
  );
};

export const useHomeScreenOptions = () => ({
  component: HomeScreenComponent,
  options: {},
});

export default HomeScreenComponent;
