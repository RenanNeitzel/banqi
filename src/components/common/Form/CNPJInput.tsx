import {IInputProps, Input} from 'native-base';
import React from 'react';
import {FieldPath, FieldValues, useController} from 'react-hook-form';
import {Controller, IControllerProps} from './Controller';
import {TextInputMaskProps} from 'react-native-masked-text';
import {useInputMaskInterceptor} from '@hooks/useInputMaskInterceptor';

export const DocumentInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  control,
  rules = {
    required: {value: true, message: 'Preencha seu CNPJ'},
    minLength: {value: 18, message: 'O CNPJ precisa ter 11 dígitos'},
  },
  ...props
}: Omit<TextInputMaskProps, 'type'> &
  IInputProps &
  IControllerProps<TFieldValues, TName>): JSX.Element => {
  const {field, fieldState} = useController({
    name,
    control,
    rules,
  });
  const masked = useInputMaskInterceptor({
    initialValue: field.value,
    type: 'cnpj',
    field,
  });

  return (
    <Controller {...props} fieldState={fieldState}>
      <Input keyboardType="numeric" {...props} {...masked} />
    </Controller>
  );
};
