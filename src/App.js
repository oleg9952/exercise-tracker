import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppProviders from './shared/providers/app-providers';
import Main from './main';

const App = () => {
  return (
    <AppProviders>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </AppProviders>
  );
};

export default App;
