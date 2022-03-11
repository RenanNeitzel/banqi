import {useMemo, useState} from 'react';
import {FieldPath, FieldValues, UseControllerReturn} from 'react-hook-form';
import {
  MaskService,
  TextInputMaskOptionProp,
  TextInputMaskTypeProp,
} from 'react-native-masked-text';

export const useInputMaskInterceptor = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  type,
  field,
  options = {},
}: {
  initialValue?: string;
  type: TextInputMaskTypeProp;
  field: UseControllerReturn<TFieldValues, TName>['field'];
  options?: TextInputMaskOptionProp;
}) => {
  const [value, onChange] = useState<string>(field.value ?? '');

  return useMemo(() => {
    return {
      value: MaskService.toMask(type, value || field.value || '', options),
      onChangeText: (text: string) => {
        onChange(text);
        const rawText = MaskService.toRawValue(type, text, options);
        field.onChange(rawText);
      },
    };
  }, [type, value, options, field]);
};
