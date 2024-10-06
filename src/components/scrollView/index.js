import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export const ScrollView = props => {
  const {children, style} = props;
  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
      {children}
      {style}
    </KeyboardAwareScrollView>
  );
};
