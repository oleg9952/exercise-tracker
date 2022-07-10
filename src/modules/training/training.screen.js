import {View, Text} from 'react-native';
import React from 'react';

const TrainingScreenComponent = () => {
  return (
    <View>
      <Text>training.screen</Text>
    </View>
  );
};

export const useTrainingScreenOptions = () => ({
  component: TrainingScreenComponent,
  options: {},
});

export default TrainingScreenComponent;
