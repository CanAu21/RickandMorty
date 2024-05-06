import React from 'react';
import {CHARACTERS, EPISODES, LOCATIONS, SETTINGS} from '../../utils/routes';
import {
  Android,
  Home,
  Location,
  PresentionChart,
  Setting2,
} from 'iconsax-react-native';

const TabIcon = ({screenName, color, focused, size}) => {
  if (screenName == CHARACTERS)
    return (
      <Android
        variant={focused ? 'Bold' : 'Outline'}
        size={size}
        color={color}
      />
    );
  if (screenName == EPISODES)
    return (
      <PresentionChart
        variant={focused ? 'Bold' : 'Outline'}
        size={size}
        color={color}
      />
    );
  if (screenName == LOCATIONS)
    return (
      <Location
        variant={focused ? 'Bold' : 'Outline'}
        size={size}
        color={color}
      />
    );
  if (screenName == SETTINGS)
    return (
      <Setting2
        variant={focused ? 'Bold' : 'Outline'}
        size={size}
        color={color}
      />
    );
};

export default TabIcon;
