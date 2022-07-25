import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useDrawerRoutes} from './navigation/routes/routes.drawer';
import {useDefaultScreenOptions} from './navigation';

const Drawer = createDrawerNavigator();

const Main = () => {
  const routes = useDrawerRoutes();
  const defaultScreenOptions = useDefaultScreenOptions();

  return (
    <Drawer.Navigator
      screenOptions={{...defaultScreenOptions, swipeEdgeWidth: 0}}>
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
