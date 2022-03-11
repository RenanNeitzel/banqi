import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {IconProps} from 'react-native-vector-icons/Icon';

Icon.loadFont();

export const VectorIcon = ({size = 24, name, color}: IconProps) => (
  <Icon size={size} name={name} color={color} />
);
