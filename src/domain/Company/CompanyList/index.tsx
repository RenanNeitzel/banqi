import React, {useCallback} from 'react';
import {View, VStack, Text} from 'native-base';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';
import {List} from './List';
import {useGetCompanies} from '@hooks/companies/queries';
import {Company} from '@services/companies';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppNavigatorParamList} from '@navigation/AppNavigator';

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  margin: 0;
  padding: 0;
`;

type CompanyListProps = NativeStackNavigationProp<
  AppNavigatorParamList,
  'CompanyDetails'
>;

export const CompanyList = () => {
  const {data: companies, isFetching} = useGetCompanies();
  const navitagion = useNavigation<CompanyListProps>();

  const onSelect = useCallback(
    (cnpj: Company['cnpj']) => {
      return navitagion.navigate('CompanyDetails', {cnpj});
    },
    [navitagion],
  );

  return (
    <View flex={1}>
      <StyledSafeAreaView>
        <VStack flex={1}>
          <VStack alignItems="center" marginBottom={10} marginTop={8}>
            <Text fontWeight="bold" fontSize="xl">
              Lista de empresas
            </Text>
          </VStack>
          <List
            loading={isFetching}
            companies={companies}
            onSelect={onSelect}
          />
        </VStack>
      </StyledSafeAreaView>
    </View>
  );
};
