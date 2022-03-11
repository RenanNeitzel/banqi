import * as React from 'react';
import {Button, Center, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {Single} from '@components/templates/Single';
import {AppNavigatorParamList} from '@navigation/AppNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type HomeNavigationProps = NativeStackNavigationProp<
  AppNavigatorParamList,
  'NewCompany'
>;

export const Home = () => {
  const navigation = useNavigation<HomeNavigationProps>();
  return (
    <Single
      headerProps={{
        title: 'Você está na HOME',
      }}>
      <Center>
        <Text>HOME</Text>
        <Button onPress={() => navigation.navigate('NewCompany')}>
          Cadastrar empresa
        </Button>
      </Center>
    </Single>
  );
};
