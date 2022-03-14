import {useCallback} from 'react';
import {FieldValues, UseFormSetValue} from 'react-hook-form';

export const useSetFormValues = <
  TFieldValues extends FieldValues = FieldValues,
>(
  setValue: UseFormSetValue<TFieldValues>,
) => {
  const setInputValues = useCallback(
    (inputValues: FieldValues) => {
      const keyValues = Object.entries(inputValues);
      keyValues.forEach(([key, value]) => {
        setValue(key as any, value);
      });
    },
    [setValue],
  );

  return setInputValues;
};
