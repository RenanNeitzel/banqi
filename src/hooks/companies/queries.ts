import {useQuery, useMutation} from 'react-query';

import {queryClient} from '@config/react-query';
import {
  Company,
  getCompany,
  getCompanies,
  postCompany,
} from '@services/companies';

export const companiesKeys = {
  all: ['companies'] as const,
  cnpj: (cnpj: string) => ['companies', cnpj],
};

export const useGetCompanies = () => {
  return useQuery(companiesKeys.all, getCompanies, {
    initialData: [],
    notifyOnChangeProps: 'tracked',
  });
};

export const useGetCompany = (cnpj: Company['cnpj']) => {
  return useQuery(
    companiesKeys.cnpj(cnpj),
    async () => await getCompany(cnpj),
    {
      initialData: undefined,
      notifyOnChangeProps: 'tracked',
    },
  );
};

export const usePostCompany = () => {
  return useMutation(postCompany, {
    onSuccess: () => {
      queryClient.invalidateQueries(companiesKeys.all);
    },
  });
};
