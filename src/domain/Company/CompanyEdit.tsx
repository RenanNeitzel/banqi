import React, {useCallback} from 'react';
import {useToast} from 'native-base';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppNavigatorParamList} from '@navigation/AppNavigator';

import {Single} from '@components/templates/Single';
import {CompanyForm, CompanyFormValues} from '@components/common/CompanyForm';
import {useEditCompany} from '@hooks/companies/queries';
import {resolveNetworkError} from '@utils/resolveNetworkError';

interface CompanyDetailsProps {
  navigation: NativeStackNavigationProp<AppNavigatorParamList, 'CompanyEdit'>;
  route: RouteProp<AppNavigatorParamList, 'CompanyEdit'>;
}

export const CompanyEdit = ({navigation, route}: CompanyDetailsProps) => {
  const toast = useToast();
  const {company: companyValues} = route.params;
  const editCompany = useEditCompany();

  const onSubmit = useCallback(
    async (formValues: CompanyFormValues) => {
      try {
        const company = await editCompany.mutateAsync(formValues);

        toast.show({
          title: 'Editado',
          status: 'success',
          variant: 'solid',
          description: 'Empresa editada com sucesso!',
        });

        return navigation.navigate('CompanyDetails', {company});
      } catch (error: any) {
        return toast.show({
          title: 'Erro',
          status: 'error',
          variant: 'solid',
          description: resolveNetworkError(error),
        });
      }
    },
    [editCompany, navigation, toast],
  );

  return (
    <Single
      headerProps={{
        title: 'Editar empresa',
        subtitle: 'Edite os campos necessários para editar sua empresa',
      }}>
      <CompanyForm defaultValues={companyValues} onSubmit={onSubmit} />
    </Single>
  );
};
