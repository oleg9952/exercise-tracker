import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useStackRoutes, useDefaultScreenOptions} from './navigation';

const {Navigator, Screen} = createNativeStackNavigator();

const App = () => {
  const routes = useStackRoutes();
  const defaultScreenOptions = useDefaultScreenOptions();

  return (
    <NavigationContainer>
      <Navigator screenOptions={defaultScreenOptions}>
        {Object.entries(routes).map(([routeName, {component, options}]) => (
          <Screen
            key={routeName}
            name={routeName}
            component={component}
            options={{...options}}
          />
        ))}
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
