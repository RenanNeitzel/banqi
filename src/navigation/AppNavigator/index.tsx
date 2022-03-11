import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {MainNavigator} from '@navigation/MainNavigator';

export type AppNavigatorParamList = {
  Main: undefined;
};

const Stack = createNativeStackNavigator<AppNavigatorParamList>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={MainNavigator} />
    </Stack.Navigator>
  );
};
