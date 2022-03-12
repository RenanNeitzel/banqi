import {useQuery} from 'react-query';

import {getCompanies} from '@services/companies';

export const companiesMethodKeys = {
  all: ['companies'] as const,
};

export const useGetCompanies = () => {
  return useQuery(companiesMethodKeys.all, getCompanies, {
    initialData: [],
    notifyOnChangeProps: 'tracked',
  });
};
