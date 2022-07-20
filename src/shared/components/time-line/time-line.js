import React from 'react';
import {Text, View} from 'react-native';

const TimeLine = ({data}) => {
  return (
    <View>
      {data?.map(item => (
        <Text key={item?.title}>{item?.title}</Text>
      ))}
    </View>
  );
};

export default TimeLine;
