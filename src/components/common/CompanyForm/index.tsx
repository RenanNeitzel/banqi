import {Button, Text, useToast} from 'native-base';
import React, {useCallback, useState} from 'react';
import {SubmitErrorHandler, SubmitHandler, useForm} from 'react-hook-form';
import {useFormValuesEffect} from '@hooks/useFormValuesEffect';
import {Form, TextInput, CNPJInput, ZipcodeInput, SelectInput} from '../Form';
import {states} from './states';
import {getAddressByZip} from '@services/address';

export type CompanyFormValues = {
  name: string;
  cnpj: string;
  description: string;
  logo: string;
  address: {
    zip: string;
    state: string;
    city: string;
    neighborhood: string;
    street: string;
    number: string;
    complement?: string;
  };
};

export const CompanyForm = React.memo(
  ({
    defaultValues = {},
    onSubmit,
    onError,
  }: {
    defaultValues?: Partial<CompanyFormValues>;
    onSubmit: SubmitHandler<CompanyFormValues>;
    onError?: SubmitErrorHandler<CompanyFormValues>;
  }) => {
    const [isLoading, setIsLoading] = useState(false);

    const {
      control,
      handleSubmit,
      formState: {isValid, isSubmitting},
      setValue,
    } = useForm<CompanyFormValues>({
      defaultValues,
      mode: 'onChange',
    });
    const toast = useToast();

    const onZipChange = useCallback(
      async zip => {
        if (!zip || zip.length < 8) {
          return;
        }

        try {
          setIsLoading(true);

          const response = await getAddressByZip(zip);
          const address = {
            zip: response.cep,
            state: response.uf,
            city: response.localidade,
            neighborhood: response.bairro,
            street: response.logradouro,
            number: '',
            complement: '',
          };
          setValue('address', address);
          setIsLoading(false);
        } catch (error) {
          toast.show({
            title: 'CEP não encontrado',
            status: 'error',
            description: 'Verifique o CEP e tente novamente',
          });
        }
      },
      [setValue, toast],
    );

    useFormValuesEffect<CompanyFormValues>(setValue, defaultValues);

    return (
      <Form>
        <Form.Section>
          <TextInput<CompanyFormValues>
            control={control}
            name="name"
            label="Nome da empresa"
            placeholder="Nome da empresa"
            rules={{
              required: 'Informe o nome da sua empresa',
            }}
          />
          <CNPJInput<CompanyFormValues>
            control={control}
            name="cnpj"
            label="CNPJ"
            placeholder="CNPJ da empresa"
          />
          <TextInput<CompanyFormValues>
            control={control}
            name="description"
            label="Sobre a empresa"
            placeholder="Sobre a empresa"
            rules={{
              required: 'Informe a atividade da sua empresa',
            }}
          />
          <TextInput<CompanyFormValues>
            control={control}
            name="logo"
            label="Link do logo da empresa"
            placeholder="Link do logo da empresa"
            rules={{
              required: 'Informe o link do logo da empresa',
            }}
          />

          <Text size={8} fontWeight="bold" width="xl" mt={8}>
            Endereço da empresa
          </Text>

          <ZipcodeInput<CompanyFormValues>
            control={control}
            name="address.zip"
            label="CEP"
            placeholder="CEP da empresa"
            onChangeText={onZipChange}
          />
          <SelectInput<CompanyFormValues>
            control={control}
            name="address.state"
            rules={{
              required: 'Selecione um estado',
            }}
            label="Estado"
            placeholder="Estado"
            borderColor="gray.200"
            placeholderTextColor="gray.500"
            _selectedItem={{
              bg: 'gray.200',
            }}
            color="black"
            isDisabled={isLoading}>
            {states.map(state => (
              <SelectInput.Item key={state} label={state} value={state} />
            ))}
          </SelectInput>
          <TextInput<CompanyFormValues>
            control={control}
            name="address.city"
            label="Cidade"
            placeholder="Cidade"
            rules={{
              required: 'Informe a cidade onde fica a empresa',
            }}
            isDisabled={isLoading}
          />
          <TextInput<CompanyFormValues>
            control={control}
            name="address.neighborhood"
            label="Bairro"
            placeholder="Bairro"
            rules={{
              required: 'Informe o bairro onde fica a empresa',
            }}
            isDisabled={isLoading}
          />
          <TextInput<CompanyFormValues>
            control={control}
            name="address.street"
            label="Rua/Avenida"
            placeholder="Rua/Avenida"
            rules={{
              required: 'Informe a Rua/Avenida onde fica a empresa',
            }}
            isDisabled={isLoading}
          />
          <TextInput<CompanyFormValues>
            control={control}
            name="address.number"
            label="Número"
            placeholder="Número"
            rules={{
              required: 'Informe o número de endereço da empresa',
            }}
            keyboardType="numeric"
            isDisabled={isLoading}
          />
          <TextInput<CompanyFormValues>
            control={control}
            name="address.complement"
            label="Complemento (Opcional)"
            placeholder="Complemento (Opcional)"
            defaultValue=""
            isDisabled={isLoading}
          />
        </Form.Section>
        <Form.Section mt={2}>
          <Button
            colorScheme="blue"
            isLoading={isSubmitting}
            isDisabled={isSubmitting || !isValid}
            onPress={handleSubmit(onSubmit, onError)}>
            Continuar
          </Button>
        </Form.Section>
      </Form>
    );
  },
);
