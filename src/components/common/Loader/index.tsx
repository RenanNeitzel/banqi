import React from 'react';
import {Center, Spinner, Text} from 'native-base';

interface LoaderProps {
  description: string;
}

export const Loader = ({description}: LoaderProps) => {
  return (
    <Center flexGrow={1}>
      <Spinner size="lg" />
      <Text fontSize="lg">{description}</Text>
    </Center>
  );
};
