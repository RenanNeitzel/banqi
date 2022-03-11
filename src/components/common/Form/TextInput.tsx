import {IInputProps, Input as InputNB} from 'native-base';
import React from 'react';
import {
  FieldPath,
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';
import {Controller, IControllerProps} from './Controller';

export const TextInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  control,
  rules,
  defaultValue,
  ...props
}: IInputProps &
  UseControllerProps<TFieldValues, TName> &
  IControllerProps<TFieldValues, TName>): JSX.Element => {
  const {field, fieldState} = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  return (
    <Controller {...props} fieldState={fieldState}>
      <InputNB onChangeText={field.onChange} {...field} {...props} />
    </Controller>
  );
};
