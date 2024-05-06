import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/router/tabRouter';

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;
