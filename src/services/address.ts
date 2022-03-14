import axios from 'axios';

export interface Address {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export const getAddressByZip = async (
  zip: Address['cep'],
): Promise<Address> => {
  const {data} = await axios.get(`https://viacep.com.br/ws/${zip}/json/`);
  return data;
};
