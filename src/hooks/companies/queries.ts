import {useQuery} from 'react-query';

import {Company, getCompany, getCompanies} from '@services/companies';

export const companiesMethodKeys = {
  all: ['companies'] as const,
  cnpj: (cnpj: string) => ['companies', cnpj],
};

export const useGetCompanies = () => {
  return useQuery(companiesMethodKeys.all, getCompanies, {
    initialData: [],
    notifyOnChangeProps: 'tracked',
  });
};

export const useGetCompany = (cnpj: Company['cnpj']) => {
  return useQuery(
    companiesMethodKeys.cnpj(cnpj),
    async () => await getCompany(cnpj),
    {
      initialData: undefined,
      notifyOnChangeProps: 'tracked',
    },
  );
};
