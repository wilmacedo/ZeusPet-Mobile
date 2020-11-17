import React from 'react';

import {
  KeyboardAvoidingView, 
  Platform 
} from "react-native";

export const colorScheme = {
  background: '#fff',
  black: '#000000',
  unselected: '#e8e8e8',
  fontLight: '#a7a7a7',
  backgroundLight: '#f2f2f2',
};

export const KeyboardFix = ({ children }) => {
  if (Platform.OS == 'ios') {
    return (
      <KeyboardAvoidingView
        style={{
          flex: 1
        }}
        behavior={'padding'}
      >
        {children}
      </KeyboardAvoidingView>
    );
  } else {
    return children;
  }
}