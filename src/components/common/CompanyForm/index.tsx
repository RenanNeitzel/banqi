import {Button, Text} from 'native-base';
import React from 'react';
import {SubmitErrorHandler, SubmitHandler, useForm} from 'react-hook-form';
import {useFormValuesEffect} from '@hooks/useFormValuesEffect';
import {Form, TextInput, CNPJInput, ZipcodeInput, SelectInput} from '../Form';
import {states} from './states';

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
    const {
      control,
      handleSubmit,
      formState: {isValid, isSubmitting},
      setValue,
    } = useForm<CompanyFormValues>({
      defaultValues,
      mode: 'onChange',
    });

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
            color="black">
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
          />
          <TextInput<CompanyFormValues>
            control={control}
            name="address.neighborhood"
            label="Bairro"
            placeholder="Bairro"
            rules={{
              required: 'Informe o bairro onde fica a empresa',
            }}
          />
          <TextInput<CompanyFormValues>
            control={control}
            name="address.street"
            label="Rua/Avenida"
            placeholder="Rua/Avenida"
            rules={{
              required: 'Informe a Rua/Avenida onde fica a empresa',
            }}
          />
          <TextInput<CompanyFormValues>
            control={control}
            name="address.number"
            label="Número"
            placeholder="Número"
            rules={{
              required: 'Informe o número de endereço da empresa',
            }}
          />
          <TextInput<CompanyFormValues>
            control={control}
            name="address.complement"
            label="Complemento (Opcional)"
            placeholder="Complemento (Opcional)"
            defaultValue=""
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
