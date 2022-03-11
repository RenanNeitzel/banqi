import {ISelectProps, Select} from 'native-base';
import React from 'react';
import {FieldPath, FieldValues, useController} from 'react-hook-form';
import {Controller, IControllerProps} from './Controller';

export const SelectInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  control,
  rules,
  children,
  ...props
}: ISelectProps & IControllerProps<TFieldValues, TName>): JSX.Element => {
  const {field, fieldState} = useController({
    name,
    control,
    rules,
  });

  return (
    <Controller {...props} fieldState={fieldState}>
      <Select
        onValueChange={value => field.onChange(value)}
        selectedValue={field.value}
        {...props}>
        {children}
      </Select>
    </Controller>
  );
};

SelectInput.Item = Select.Item;
