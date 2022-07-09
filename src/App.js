import * as React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styled from 'styled-components/native';

const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: orange;
`;

const StyledText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 25px;
`;

const {Navigator, Screen} = createNativeStackNavigator();

const Home = () => {
  const {navigate} = useNavigation();
  return (
    <StyledView>
      <StyledText>Home</StyledText>
      <StyledText onPress={() => navigate('About')}>Go about</StyledText>
    </StyledView>
  );
};

const About = () => {
  return (
    <StyledView>
      <StyledText>About</StyledText>
    </StyledView>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={Home} />
        <Screen name="About" component={About} />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
