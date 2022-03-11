import React, {useState} from 'react';
import {Box, IBoxProps, StatusBar} from 'native-base';
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';

import {
  NativeSafeAreaViewProps,
  SafeAreaView,
} from 'react-native-safe-area-context';

interface Props {
  statusBarProps?: React.ComponentProps<typeof StatusBar>;
  scrollViewProps?: KeyboardAwareScrollViewProps;
  safeAreaViewProps?: Partial<NativeSafeAreaViewProps>;
  boxProps?: IBoxProps;
  children: React.ReactNode;
  themedBackground?: boolean;
}

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  margin: 0;
  padding: 0;
`;

export const Screen = ({
  statusBarProps,
  scrollViewProps,
  safeAreaViewProps = {},
  boxProps,
  children,
}: Props) => {
  const [keyboardIsActive, setKeyboardIsActive] = useState<boolean>(false);
  const flexStyle = keyboardIsActive ? 0 : 1;

  return (
    <>
      <StatusBar
        translucent={false}
        barStyle="dark-content"
        backgroundColor="white"
        {...statusBarProps}
      />
      <Box flex={1} {...boxProps}>
        <StyledSafeAreaView {...safeAreaViewProps}>
          <KeyboardAwareScrollView
            contentContainerStyle={{flexGrow: flexStyle}}
            showsVerticalScrollIndicator={
              scrollViewProps?.showsVerticalScrollIndicator === undefined
                ? false
                : scrollViewProps?.showsVerticalScrollIndicator
            }
            extraScrollHeight={5}
            extraHeight={5}
            onKeyboardWillShow={() => setKeyboardIsActive(true)}
            onKeyboardWillHide={() => setKeyboardIsActive(false)}
            enableResetScrollToCoords={true}
            {...scrollViewProps}>
            {children}
          </KeyboardAwareScrollView>
        </StyledSafeAreaView>
      </Box>
    </>
  );
};
