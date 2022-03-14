import axiosInstance from '@config/axios';

export interface Company {
  name: string;
  cnpj: string;
  description: string;
  logo: string;
  createdAt?: Date;
  address: {
    zip: string;
    state: string;
    city: string;
    neighborhood: string;
    street: string;
    number: string;
    complement?: string;
  };
}

export const getCompanies = async (): Promise<Company[]> => {
  const {data} = await axiosInstance.get('/companies');
  return data;
};

export const getCompany = async (
  cnpj: Company['cnpj'],
): Promise<Company | undefined> => {
  const data = await getCompanies();
  return data.find(company => company.cnpj === cnpj);
};

export const postCompany = async (params: Company) => {
  const {data} = await axiosInstance.post('/companies/?format=json', params);
  return data;
};

export const editCompany = async (params: Company) => {
  const data = await axiosInstance.put(
    `/companies/${params.cnpj}/?format=api`,
    params,
  );
  return data;
};
