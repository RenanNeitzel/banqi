import axiosInstance from '@config/axios';

export interface Company {
  id?: string;
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

export const getCompany = async (id: Company['id']): Promise<Company> => {
  const {data} = await axiosInstance.get(`/companies/${id}`);
  return data;
};

export const postCompany = async (params: Company) => {
  const {data} = await axiosInstance.post('/companies/?format=json', params);
  return data;
};

export const editCompany = async (params: Company) => {
  const {data} = await axiosInstance.patch(
    `/companies/${params.id}/?format=json`,
    params,
  );
  return data;
};


// teste