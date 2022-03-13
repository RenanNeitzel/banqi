import React from 'react';
import {Button, HStack, Image} from 'native-base';
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
      <Form>
        <Form.Section>
          <CNPJInput<SearchFormValues>
            control={control}
            name="cnpj"
            label="Buscar CNPJ"
            placeholder="Buscar CNPJ"
          />
        </Form.Section>
        <Form.Section>
          <Button
            isLoading={isSubmitting}
            isDisabled={isSubmitting || !isValid}
            onPress={onSubmit}>
            Buscar empresa
          </Button>
          <Button
            mt={3}
            variant="outline"
            onPress={() => navigation.navigate('NewCompany')}>
            Cadastrar nova empresa
          </Button>
        </Form.Section>
      </Form>
    </Single>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 160,
    height: 58,
  },
});
