import React from 'react';
import Episodes from '../screens/episodes';
import Characters from '../screens/characters';
import Locations from '../screens/locations';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Settings from '../screens/settings';
import {tabBarStyle} from '../styles/tabBarStyle';
import {CHARACTERS, EPISODES, LOCATIONS, SETTINGS} from '../utils/routes';
import Colors from '../theme/colors';
import TabIcon from '../components/router/tabIcon';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => (
          <TabIcon
            screenName={route.name}
            size={size}
            color={color}
            focused={focused}
          />
        ),
        headerStyle: tabBarStyle.headerStyle,
        tabBarStyle: tabBarStyle.tabBarStyle,
        tabBarActiveTintColor: Colors.BLACK,
      })}>
      <Tab.Screen name={CHARACTERS} component={Characters} />
      <Tab.Screen name={EPISODES} component={Episodes} />
      <Tab.Screen name={LOCATIONS} component={Locations} />
      <Tab.Screen name={SETTINGS} component={Settings} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
