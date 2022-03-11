import React, {useMemo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon, useColorModeValue, useTheme} from 'native-base';
import styled from 'styled-components';

import {TabBottomNavigation} from '@components/TabBottomNavigator';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CompanyNavigator} from './navigators/CompanyNavigator';
import {Home} from '@domain/Home';
import {Profile} from '@domain/Profile';

export type MainNavigatorParamList = {
  Home: undefined;
  Company: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<MainNavigatorParamList>();

export const MainNavigator = () => {
  const {colors} = useTheme();

  const backgroundColor = useColorModeValue(colors.white, colors.gray['900']);

  const StyledSafeAreaView = useMemo(
    () => styled(SafeAreaView)`
      flex: 1;
      background-color: ${backgroundColor};
    `,
    [backgroundColor],
  );

  return (
    <StyledSafeAreaView edges={['bottom']}>
      <Tab.Navigator
        detachInactiveScreens
        tabBar={props => <TabBottomNavigation {...props} />}
        screenOptions={{
          unmountOnBlur: true,
          headerShown: false,
          tabBarActiveBackgroundColor: colors.blue[400],
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            unmountOnBlur: false,
            tabBarLabel: 'Início',
            tabBarIcon: ({color, size}) => {
              return <Icon name="add" color={color} size={size} />;
            },
          }}
        />
        <Tab.Screen
          name="Company"
          component={CompanyNavigator}
          options={{
            tabBarLabel: 'Lista de Empresas',
            tabBarIcon: ({color, size}) => (
              <Icon name="check" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: ({color, size}) => (
              <Icon name="info" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </StyledSafeAreaView>
  );
};
