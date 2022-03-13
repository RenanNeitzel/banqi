import {useEffect} from 'react';
import {FieldValues, UseFormSetValue} from 'react-hook-form';
import {useSetFormValues} from './useSetFormValues';

export const useFormValuesEffect = <
  TFieldValues extends FieldValues = FieldValues,
>(
  setValue: UseFormSetValue<TFieldValues>,
  values?: Partial<TFieldValues>,
) => {
  const setInputValues = useSetFormValues(setValue);

  useEffect(() => values && setInputValues(values), [values, setInputValues]);
};
