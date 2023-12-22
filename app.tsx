import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {MainStackNavigation} from './src/navigation/main-stack-navigation';

export const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <MainStackNavigation />
    </NavigationContainer>
  );
};
