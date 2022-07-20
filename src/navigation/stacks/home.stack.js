import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useHomeStackRoutes} from '../routes/routes.stack';
import {useDefaultScreenOptions} from '../routes.utils';

const {Navigator, Screen} = createNativeStackNavigator();

const HomeStackComponent = () => {
  const routes = useHomeStackRoutes();
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

export const useHomeStackOptions = () => ({
  component: HomeStackComponent,
  options: {},
});

export default HomeStackComponent;
