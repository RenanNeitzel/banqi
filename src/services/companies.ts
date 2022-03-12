import axiosInstance from '@config/axios';

export interface Company {
  name: string;
  cnpj: string;
  description: string;
  logo: URL;
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
