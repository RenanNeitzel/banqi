import React, {useCallback} from 'react';
import {View, VStack, Text} from 'native-base';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';
import {List} from './List';
import {useGetCompanies} from '@hooks/companies/queries';
import {Company} from '@services/companies';

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  margin: 0;
  padding: 0;
`;

export const CompanyList = () => {
  const {data: companies, isFetching} = useGetCompanies();

  console.log('CARREGANDO', isFetching);

  const onSelect = useCallback((value: Company['cnpj']) => {
    console.log('EMPRESA SELECIONADA', value);
  }, []);

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
