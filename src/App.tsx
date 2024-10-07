import '../gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './presentation/navigation/StackNavigator';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

export const App = () => {
  return (
    <ApplicationProvider
    {...eva}
    theme={eva.light}
    >
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
    </ApplicationProvider>
  );
};

