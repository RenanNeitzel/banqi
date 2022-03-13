import {Loader} from '@components/common/Loader';
import {Single} from '@components/templates/Single';
import {useGetCompany} from '@hooks/companies/queries';
import {AppNavigatorParamList} from '@navigation/AppNavigator';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  Box,
  Center,
  HStack,
  VStack,
  Text,
  Divider,
  View,
  Button,
} from 'native-base';
import * as React from 'react';

interface CompanyDetailsProps {
  navigation: NativeStackNavigationProp<
    AppNavigatorParamList,
    'CompanyDetails'
  >;
  route: RouteProp<AppNavigatorParamList, 'CompanyDetails'>;
}

export const CompanyDetails = ({navigation, route}: CompanyDetailsProps) => {
  const {cnpj} = route.params;
  const {data: company, isFetching} = useGetCompany(cnpj);

  const Detail = ({
    label,
    value,
  }: {
    label: string;
    value: string | URL | Date | undefined;
  }) => (
    <HStack justifyContent="space-between" marginY={3}>
      <Text fontWeight="bold">{label}</Text>
      <Text>{value}</Text>
    </HStack>
  );

  return (
    <Single headerProps={{title: 'Detalhes da empresa'}}>
      <VStack padding={3}>
        {isFetching ? (
          <Loader description="Estamos buscando as informações da empresa" />
        ) : (
          <View>
            <Box borderWidth={1} borderRadius="md" padding={3}>
              <Center>
                <VStack width="full">
                  <Detail label="Nome da empresa:" value={company?.name} />
                  <Detail label="CNPJ:" value={company?.cnpj} />
                  <Detail label="Sobre:" value={company?.description} />
                  <Detail label="Logo:" value={company?.logo} />
                  <Detail label="Criada em:" value={company?.createdAt} />

                  <Divider my={3} bgColor="black" />
                  <Text
                    marginTop={4}
                    marginBottom={2}
                    fontWeight="bold"
                    fontSize="lg">
                    Endereço
                  </Text>

                  <Detail label="CEP:" value={company?.address?.zip} />
                  <Detail
                    label="Rua/Avenida:"
                    value={company?.address?.street}
                  />
                  <Detail
                    label="Bairro:"
                    value={company?.address?.neighborhood}
                  />
                  <Detail label="Número:" value={company?.address?.number} />
                  <Detail
                    label="Complemento:"
                    value={company?.address?.complement}
                  />
                  <Detail label="Estado:" value={company?.address?.state} />
                  <Detail label="Cidade:" value={company?.address?.city} />
                </VStack>
              </Center>
            </Box>

            <Button
              mt={3}
              onPress={() => navigation.navigate('CompanyEdit', {company})}>
              Editar empresa
            </Button>
          </View>
        )}
      </VStack>
    </Single>
  );
};
