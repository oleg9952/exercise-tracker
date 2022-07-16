import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeStack} from './navigation/stacks';
import {useDrawerRoutes} from './navigation/routes.drawer';
import {useDefaultScreenOptions} from './navigation';

const Drawer = createDrawerNavigator();

const Main = () => {
  const routes = useDrawerRoutes();
  const defaultScreenOptions = useDefaultScreenOptions();

  return (
    <Drawer.Navigator screenOptions={defaultScreenOptions}>
      {Object.entries(routes).map(([routeName, {component, options}]) => (
        <Drawer.Screen
          key={routeName}
          name={routeName}
          component={component}
          options={{...options}}
        />
      ))}
    </Drawer.Navigator>
  );
};

export default Main;
