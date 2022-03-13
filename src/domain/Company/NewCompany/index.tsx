import React, {useCallback} from 'react';
import {useToast} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppNavigatorParamList} from '@navigation/AppNavigator';

import {Single} from '@components/templates/Single';
import {usePostCompany} from '@hooks/companies/queries';
import {CompanyForm, CompanyFormValues} from '@components/common/CompanyForm';

type NewCompanyProps = NativeStackNavigationProp<
  AppNavigatorParamList,
  'NewCompany'
>;

export const NewCompany = () => {
  const createCompany = usePostCompany();
  const navigation = useNavigation<NewCompanyProps>();
  const toast = useToast();

  const onSubmit = useCallback(
    async (formValues: CompanyFormValues) => {
      try {
        await createCompany?.mutateAsync(formValues);

        toast.show({
          title: 'Sucesso',
          status: 'success',
          variant: 'solid',
          description: 'Empresa cadastrada com sucesso!',
        });
        return navigation.replace('CompanyDetails', {cnpj: formValues.cnpj});
      } catch (error: any) {
        return toast.show({
          title: 'Erro',
          status: 'error',
          variant: 'solid',
          description: error.message,
        });
      }
    },
    [createCompany, toast, navigation],
  );

  return (
    <Single
      headerProps={{
        title: 'Cadastro da nova empresa',
        subtitle: 'Preencha os campos abaixo para cadastrar sua empresa',
      }}>
      <CompanyForm onSubmit={onSubmit} />
    </Single>
  );
};
