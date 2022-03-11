import React from 'react';
import {FormControl, IStackProps, Stack, Text} from 'native-base';
import {
  FieldPath,
  FieldValues,
  UseControllerProps,
  UseControllerReturn,
} from 'react-hook-form';

interface ControllerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Pick<UseControllerReturn<TFieldValues, TName>, 'fieldState'> {
  label: React.ReactNode;
  stackProps?: IStackProps;
}

export type IControllerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Pick<ControllerProps, 'label'> & UseControllerProps<TFieldValues, TName>;

export const Controller = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  children,
  label,
  fieldState,
  stackProps = {},
}: React.PropsWithChildren<ControllerProps<TFieldValues, TName>>) => {
  return (
    <FormControl flex={1} flexGrow={1} my="6px">
      <Stack {...stackProps}>
        <FormControl.Label marginBottom={1}>
          {typeof label === 'string' ? (
            <Text fontSize="xs" fontWeight="medium">
              {label}
            </Text>
          ) : (
            label
          )}
        </FormControl.Label>
        {children}
      </Stack>
      {fieldState.error?.message && (
        <Text color="red.300" fontSize="sm" mt="1">
          {fieldState.error?.message}
        </Text>
      )}
    </FormControl>
  );
};
