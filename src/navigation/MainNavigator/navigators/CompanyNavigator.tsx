import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  NewCompany,
  CompanyDetails,
  CompanyEdit,
  CompanyList,
} from '@domain/Company';

export type CompanyStackParamList = {
  NewCompany: undefined;
  CompanyDetails: undefined;
  CompanyEdit: undefined;
  CompanyList: undefined;
};

const Stack = createNativeStackNavigator<CompanyStackParamList>();

export const CompanyNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="NewCompany" component={NewCompany} />
      <Stack.Screen name="CompanyDetails" component={CompanyDetails} />
      <Stack.Screen name="CompanyEdit" component={CompanyEdit} />
      <Stack.Screen name="CompanyList" component={CompanyList} />
    </Stack.Navigator>
  );
};
