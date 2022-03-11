import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, VStack} from 'native-base';
import {TouchableOpacity} from 'react-native';

import {VectorIcon} from '@components/common/Icon';

export const Header = ({
  title,
  subtitle,
  disableBackButton,
}: {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  disableBackButton?: boolean;
}) => {
  const navigation = useNavigation();
  const canGoBack = navigation.canGoBack();

  return (
    <>
      <VStack p="16px">
        <View pb="16px">
          {!disableBackButton && canGoBack && (
            <TouchableOpacity onPress={navigation.goBack}>
              <VectorIcon name="arrow-left" color="black" />
            </TouchableOpacity>
          )}
        </View>
        <View>
          <Text fontSize="24px" fontWeight="medium">
            {title}
          </Text>
          <Text fontSize="12px" fontWeight="normal">
            {subtitle}
          </Text>
        </View>
      </VStack>
    </>
  );
};
