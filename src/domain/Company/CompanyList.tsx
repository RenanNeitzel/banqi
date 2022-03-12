import {useGetCompanies} from '@hooks/companies/useGetCompanies';
import * as React from 'react';
import {Text, View} from 'react-native';

export const CompanyList = () => {
  const {data: companies} = useGetCompanies();

  console.log('BUSCOU EMPRESAS', companies);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Company List</Text>
    </View>
  );
};
