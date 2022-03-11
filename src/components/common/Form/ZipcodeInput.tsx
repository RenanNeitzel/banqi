import {IInputProps, Input} from 'native-base';
import React from 'react';
import {FieldPath, FieldValues, useController} from 'react-hook-form';
import {Controller, IControllerProps} from './Controller';
import {TextInputMaskProps} from 'react-native-masked-text';
import {useInputMaskInterceptor} from '@hooks/useInputMaskInterceptor';

export const ZipcodeInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  control,
  rules = {
    required: 'Preencha o seu CEP.',
    minLength: {value: 8, message: 'Verifique o CEP e tente novamente.'},
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
    type: 'zip-code',
    field,
  });

  return (
    <Controller {...props} fieldState={fieldState}>
      <Input
        keyboardType="numeric"
        placeholder="00000-000"
        {...props}
        {...masked}
      />
    </Controller>
  );
};
