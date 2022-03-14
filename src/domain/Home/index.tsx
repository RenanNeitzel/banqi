import React from 'react';
import {Button, Center, HStack, Image} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {AppNavigatorParamList} from '@navigation/AppNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useForm} from 'react-hook-form';

import BanqiLogo from '@assets/images/banqi-logo.png';
import {Single} from '@components/templates/Single';
import {CNPJInput, Form} from '@components/common/Form';
import {StyleSheet} from 'react-native';

type HomeNavigationProps = NativeStackNavigationProp<AppNavigatorParamList>;

type SearchFormValues = {
  cnpj: string;
};

export const Home = () => {
  const navigation = useNavigation<HomeNavigationProps>();
  const {
    control,
    handleSubmit,
    formState: {isValid, isSubmitting},
  } = useForm<SearchFormValues>({mode: 'onChange'});

  const onSubmit = handleSubmit((formValues: SearchFormValues) => {
    return navigation.navigate('CompanyDetails', {cnpj: formValues.cnpj});
  });

  return (
    <Single>
      <HStack justifyContent="center">
        <Image
          source={BanqiLogo}
          resizeMode="stretch"
          alt="Logo Banqi"
          style={styles.image}
        />
      </HStack>
      <Center flex={1}>
        <Button mt={3} onPress={() => navigation.navigate('NewCompany')}>
          Cadastrar nova empresa
        </Button>
      </Center>
    </Single>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 160,
    height: 58,
  },
});
