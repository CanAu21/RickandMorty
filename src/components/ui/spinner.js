import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import Colors from '../../theme/colors';
import {screensStyle} from '../../styles/screensStyle';

const Spinner = () => {
  return (
    <View style={screensStyle.container}>
      <ActivityIndicator size={'large'} color={Colors.BLACK} />
    </View>
  );
};

export default Spinner;
