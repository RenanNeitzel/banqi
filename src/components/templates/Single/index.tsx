import React from 'react';
import {Screen} from '../Screen';
import {Header} from './Header';

export const Single = ({
  children,
  headerProps,
  screenProps,
}: React.PropsWithChildren<{
  screenProps?: Omit<React.ComponentProps<typeof Screen>, 'children'>;
  headerProps?: React.ComponentProps<typeof Header>;
}>) => {
  return (
    <Screen {...screenProps}>
      <Header {...headerProps} />
      {children}
    </Screen>
  );
};
