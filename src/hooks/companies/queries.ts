import {useQuery, useMutation} from 'react-query';

import {queryClient} from '@config/react-query';
import {
  Company,
  getCompany,
  getCompanies,
  postCompany,
  editCompany,
} from '@services/companies';

export const companiesKeys = {
  all: ['companies'] as const,
  id: (id: string) => ['companies', id],
};

export const useGetCompanies = () => {
  return useQuery(companiesKeys.all, getCompanies, {
    initialData: [],
    notifyOnChangeProps: 'tracked',
  });
};

export const useGetCompany = (id: Company['id']) => {
  return useQuery(companiesKeys.id(id), async () => await getCompany(id), {
    initialData: undefined,
    notifyOnChangeProps: 'tracked',
  });
};

export const usePostCompany = () => {
  return useMutation(postCompany, {
    onSuccess: () => {
      queryClient.invalidateQueries(companiesKeys.all);
    },
  });
};

export const useEditCompany = () => {
  return useMutation(editCompany, {
    onSuccess: () => {
      queryClient.invalidateQueries(companiesKeys.all);
    },
  });
};
