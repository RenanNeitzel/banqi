import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {MainNavigator} from '@navigation/MainNavigator';
import {NewCompany, CompanyDetails, CompanyEdit} from '@domain/Company';

export type AppNavigatorParamList = {
  Main: undefined;
  NewCompany: undefined;
  CompanyDetails: undefined;
  CompanyEdit: undefined;
};

const Stack = createNativeStackNavigator<AppNavigatorParamList>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={MainNavigator} />
      <Stack.Screen name="NewCompany" component={NewCompany} />
      <Stack.Screen name="CompanyDetails" component={CompanyDetails} />
      <Stack.Screen name="CompanyEdit" component={CompanyEdit} />
    </Stack.Navigator>
  );
};
