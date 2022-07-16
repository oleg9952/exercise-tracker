import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useStackRoutes} from './navigation/routes';
import {useDefaultScreenOptions} from './navigation/routes.utils';

const {Navigator, Screen} = createNativeStackNavigator();

const Main = () => {
  const routes = useStackRoutes();
  const defaultScreenOptions = useDefaultScreenOptions();

  return (
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
  );
};

export default Main;
