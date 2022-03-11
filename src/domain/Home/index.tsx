import * as React from 'react';
import {Center, Text} from 'native-base';

import {Single} from '@components/templates/Single';

export const Home = () => {
  return (
    <Single
      headerProps={{
        title: 'Você está na HOME',
      }}>
      <Center>
        <Text>HOME</Text>
      </Center>
    </Single>
  );
};
