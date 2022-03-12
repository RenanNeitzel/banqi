import {useGetCompany} from '@hooks/companies/queries';
import * as React from 'react';
import {Text, View} from 'react-native';

export const CompanyList = () => {
  const {data: company} = useGetCompany('112121');

  console.log('DETALHE DA EMPRESA', company);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Company List</Text>
    </View>
  );
};
