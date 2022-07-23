import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from '../styles/styles';

const AppProviders = ({children}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppProviders;
