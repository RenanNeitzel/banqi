import {VStack} from 'native-base';
import {IVStackProps} from 'native-base/lib/typescript/components/primitives/Stack/VStack';
import React from 'react';

export const Form = (props: React.PropsWithChildren<IVStackProps>) => {
  return (
    <VStack
      flexGrow={1}
      justifyContent="space-between"
      padding="16px"
      {...props}>
      {props.children}
    </VStack>
  );
};

Form.Section = ({
  children,
  ...props
}: React.PropsWithChildren<IVStackProps>) => {
  return <VStack {...props}>{children}</VStack>;
};

export * from './TextInput';
export * from './ZipcodeInput';
export * from './CNPJInput';
export * from './SelectInput';
