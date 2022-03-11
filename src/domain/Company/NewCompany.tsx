import * as React from 'react';

import {Center, Text} from 'native-base';
import {Single} from '@components/templates/Single';

export const NewCompany = () => {
  return (
    <Single
      headerProps={{
        title: 'Você está no CADASTRO DA EMPRESA',
      }}>
      <Center>
        <Text>Cadastrar nova empresa</Text>
      </Center>
    </Single>
  );
};
