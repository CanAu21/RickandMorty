import React from 'react';
import Episodes from '../screens/episodes';
import Characters from '../screens/characters';
import Locations from '../screens/locations';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Characters" component={Characters} />
      <Tab.Screen name="Episodes" component={Episodes} />
      <Tab.Screen name="Locations" component={Locations} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
