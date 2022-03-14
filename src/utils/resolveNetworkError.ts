import axios, {AxiosError} from 'axios';

export const resolveNetworkError = (
  error: AxiosError | Error,
): string | string[] => {
  if (axios.isAxiosError(error)) {
    return resolveAxiosError(error);
  }

  // type Error
  return error.message;
};

const resolveAxiosError = ({response}: AxiosError): string => {
  const message = response?.data;

  const simpleMessage = Object.values<string>(message)[0][0];

  return simpleMessage;
};
