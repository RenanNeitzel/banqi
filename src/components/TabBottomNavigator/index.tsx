import React from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {Box, Center, HStack, Text} from 'native-base';

import style from './style';

export const TabBottomNavigation = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const focusedOptions =
    descriptors?.[state?.routes?.[state?.index]?.key]?.options;

  const tabBarStyle = focusedOptions?.tabBarStyle as StyleProp<ViewStyle>;

  return (
    <Box style={tabBarStyle}>
      <HStack
        px="16px"
        py="8px"
        alignItems="center"
        justifyContent="space-around">
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label = options.tabBarLabel || options.title || route.name;
          const Icon = options.tabBarIcon as any;
          const isFocused = state.routeNames[state.index] === route.name;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({
                name: route.name,
                params: {},
                merge: true,
              });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={{selected: isFocused}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={style.tabAction}>
              {options.tabBarIcon && (
                <Center
                  width="full"
                  borderRadius="full"
                  overflow="hidden"
                  backgroundColor={
                    isFocused ? options.tabBarActiveBackgroundColor : undefined
                  }>
                  <Icon />
                </Center>
              )}
              <Text
                _dark={{color: 'white'}}
                _light={{color: 'black'}}
                fontSize="xs"
                fontWeight="500"
                textAlign="center">
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </HStack>
    </Box>
  );
};
